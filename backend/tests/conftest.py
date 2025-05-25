from pytest_plone import fixtures_factory
from pythoncerrado.site.testing import ACCEPTANCE_TESTING
from pythoncerrado.site.testing import FUNCTIONAL_TESTING
from pythoncerrado.site.testing import INTEGRATION_TESTING


pytest_plugins = ["pytest_plone"]


globals().update(
    fixtures_factory((
        (ACCEPTANCE_TESTING, "acceptance"),
        (FUNCTIONAL_TESTING, "functional"),
        (INTEGRATION_TESTING, "integration"),
    ))
)
