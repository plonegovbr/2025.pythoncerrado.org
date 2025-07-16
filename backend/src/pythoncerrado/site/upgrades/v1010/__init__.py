from plone import api
from Products.CMFPlone.MigrationTool import MigrationTool
from Products.GenericSetup.tool import SetupTool
from pythoncerrado.site import logger


def upgrade_plone(setup_tool: SetupTool):
    portal = api.portal.get()
    mt: MigrationTool = portal.portal_migration
    mt.upgrade()
    logger.info("Plone upgrade completed successfully.")


def upgrade_techevent(setup_tool: SetupTool):
    setup_tool.upgradeProfile(
        "profile-collective.techevent:default",
    )
    logger.info("collective.techevent upgrade completed successfully.")
