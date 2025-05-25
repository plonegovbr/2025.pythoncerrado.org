"""Handle Logins."""

from plone import api
from Products.PlonePAS.events import UserLoggedInEvent
from Products.PlonePAS.plugins.ufactory import PloneUser
from pythoncerrado.site import logger
from pythoncerrado.site.settings import CORE_TEAM


def add_to_groups(user: PloneUser):
    group_names = []
    with api.env.adopt_roles(["Manager"]):
        username = user.getUserName()
        if username in CORE_TEAM:
            group_names = ["Administrators", "Site Administrators"]
        for groupname in group_names:
            try:
                group = api.group.get(groupname)
            except ValueError:
                logger.warning(f"Group {groupname} does not exist")
                continue
            if group:
                try:
                    api.group.add_user(group=group, username=username)
                except Exception as exc:
                    logger.error(
                        f"Problem adding user {username} to {groupname}", exc_info=exc
                    )
                    continue
                else:
                    logger.info(f"Added user {username} to {groupname}")


def login_handler(event: UserLoggedInEvent):
    """Add user to correct Group."""
    user: PloneUser = event.object
    # Add to groups
    add_to_groups(user)
