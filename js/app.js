window.getHeight = () => window.innerHeight;

window.updatePrismTheme = (themeCss) => {
	const link = document.getElementById('prism-theme');
	if (link) {
		link.href = themeCss;
	}
}