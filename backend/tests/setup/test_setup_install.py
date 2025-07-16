from pythoncerrado.site import PACKAGE_NAME

import pytest


class TestSetupInstall:
    def test_addon_installed(self, installer):
        """Test if pythoncerrado.site is installed."""
        assert installer.is_product_installed(PACKAGE_NAME) is True

    def test_browserlayer(self, browser_layers):
        """Test that IBrowserLayer is registered."""
        from pythoncerrado.site.interfaces import IBrowserLayer

        assert IBrowserLayer in browser_layers

    def test_latest_version(self, profile_last_version):
        """Test latest version of default profile."""
        assert profile_last_version(f"{PACKAGE_NAME}:default") == "1010"

    @pytest.mark.parametrize(
        "package",
        [
            "pas.plugins.authomatic",
            "plonegovbr.socialmedia",
            "kitconcept.voltolighttheme",
            "collective.techevent",
        ],
    )
    def test_dependency_installed(self, installer, package: str):
        """Test latest version of default profile."""
        assert installer.is_product_installed(package) is True
