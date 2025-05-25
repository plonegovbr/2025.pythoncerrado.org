"""Init and utils."""

from zope.i18nmessageid import MessageFactory

import logging


__version__ = "20250525.1"

PACKAGE_NAME = "pythoncerrado.site"

_ = MessageFactory(PACKAGE_NAME)

logger = logging.getLogger(PACKAGE_NAME)
