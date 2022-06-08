import {
	SET_ADMIN_LOGO,
	SET_FOOTER_LOGO,
	SET_HEADER_LOGO,
	SET_LOGOS
} from './logoContants';

export const setLogos = (logos: AppLogos) => ({
	type: SET_LOGOS,
	payload: logos
});

export const setHeaderLogo = (headerLogo: string) => ({
	type: SET_HEADER_LOGO,
	payload: headerLogo
});

export const setFooterLogo = (footerLogo: string) => ({
	type: SET_FOOTER_LOGO,
	payload: footerLogo
});

export const setAdminLogo = (adminLogo: string) => ({
	type: SET_ADMIN_LOGO,
	payload: adminLogo
});
