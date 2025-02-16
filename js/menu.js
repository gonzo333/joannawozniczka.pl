function showHome(){
	document.getElementById('home').style.display = '';
	document.getElementById('uslugi').style.display = 'none';
	document.getElementById('mary').style.display = 'none';
	document.getElementById('zabiegi').style.display = 'none';
	document.getElementById('cennik').style.display = 'none';
	document.getElementById('galeria').style.display = 'none';
	document.getElementById('portfolio').style.display = 'none';
	document.getElementById('kontakt').style.display = 'none';

	document.getElementById('home_li').classList.add('active');
	document.getElementById('uslugi_li').classList.remove('active');
	document.getElementById('mary_li').classList.remove('active');
	document.getElementById('zabiegi_li').classList.remove('active');
	document.getElementById('cennik_li').classList.remove('active');
	document.getElementById('galeria_li').classList.remove('active');
	document.getElementById('portfolio_li').classList.remove('active');
	document.getElementById('kontakt_li').classList.remove('active');
}

function showUslugi(){
	document.getElementById('home').style.display = 'none';
	document.getElementById('uslugi').style.display = '';
	document.getElementById('mary').style.display = 'none';
	document.getElementById('zabiegi').style.display = 'none';
	document.getElementById('cennik').style.display = 'none';
	document.getElementById('galeria').style.display = 'none';
	document.getElementById('portfolio').style.display = 'none';
	document.getElementById('kontakt').style.display = 'none';

	document.getElementById('home_li').classList.remove('active');
	document.getElementById('uslugi_li').classList.add('active');
	document.getElementById('mary_li').classList.remove('active');
	document.getElementById('zabiegi_li').classList.remove('active');
	document.getElementById('cennik_li').classList.remove('active');
	document.getElementById('galeria_li').classList.remove('active');
	document.getElementById('portfolio_li').classList.remove('active');
	document.getElementById('kontakt_li').classList.remove('active');
}

function showMary(){
	document.getElementById('home').style.display = 'none';
	document.getElementById('uslugi').style.display = 'none';
	document.getElementById('mary').style.display = '';
	document.getElementById('zabiegi').style.display = 'none';
	document.getElementById('cennik').style.display = 'none';
	document.getElementById('galeria').style.display = 'none';
	document.getElementById('portfolio').style.display = 'none';
	document.getElementById('kontakt').style.display = 'none';

	document.getElementById('home_li').classList.remove('active');
	document.getElementById('uslugi_li').classList.remove('active');
	document.getElementById('mary_li').classList.add('active');
	document.getElementById('zabiegi_li').classList.remove('active');
	document.getElementById('cennik_li').classList.remove('active');
	document.getElementById('galeria_li').classList.remove('active');
	document.getElementById('portfolio_li').classList.remove('active');
	document.getElementById('kontakt_li').classList.remove('active');
}

function showZabiegi(){
	document.getElementById('home').style.display = 'none';
	document.getElementById('uslugi').style.display = 'none';
	document.getElementById('mary').style.display = 'none';
	document.getElementById('zabiegi').style.display = '';
	document.getElementById('cennik').style.display = 'none';
	document.getElementById('galeria').style.display = 'none';
	document.getElementById('portfolio').style.display = 'none';
	document.getElementById('kontakt').style.display = 'none';

	document.getElementById('home_li').classList.remove('active');
	document.getElementById('uslugi_li').classList.remove('active');
	document.getElementById('mary_li').classList.remove('active');
	document.getElementById('zabiegi_li').classList.add('active');
	document.getElementById('cennik_li').classList.remove('active');
	document.getElementById('galeria_li').classList.remove('active');
	document.getElementById('portfolio_li').classList.remove('active');
	document.getElementById('kontakt_li').classList.remove('active');
}

function showCennik(){
	document.getElementById('home').style.display = 'none';
	document.getElementById('uslugi').style.display = 'none';
	document.getElementById('mary').style.display = 'none';
	document.getElementById('zabiegi').style.display = 'none';
	document.getElementById('cennik').style.display = '';
	document.getElementById('galeria').style.display = 'none';
	document.getElementById('portfolio').style.display = 'none';
	document.getElementById('kontakt').style.display = 'none';

	document.getElementById('home_li').classList.remove('active');
	document.getElementById('uslugi_li').classList.remove('active');
	document.getElementById('mary_li').classList.remove('active');
	document.getElementById('zabiegi_li').classList.remove('active');
	document.getElementById('cennik_li').classList.add('active');
	document.getElementById('galeria_li').classList.remove('active');
	document.getElementById('portfolio_li').classList.remove('active');
	document.getElementById('kontakt_li').classList.remove('active');
}

function showGaleria(){
	document.getElementById('home').style.display = 'none';
	document.getElementById('uslugi').style.display = 'none';
	document.getElementById('mary').style.display = 'none';
	document.getElementById('zabiegi').style.display = 'none';
	document.getElementById('cennik').style.display = 'none';
	document.getElementById('galeria').style.display = '';
	document.getElementById('portfolio').style.display = 'none';
	document.getElementById('kontakt').style.display = 'none';

	document.getElementById('home_li').classList.remove('active');
	document.getElementById('uslugi_li').classList.remove('active');
	document.getElementById('mary_li').classList.remove('active');
	document.getElementById('zabiegi_li').classList.remove('active');
	document.getElementById('cennik_li').classList.remove('active');
	document.getElementById('galeria_li').classList.add('active');
	document.getElementById('portfolio_li').classList.remove('active');
	document.getElementById('kontakt_li').classList.remove('active');
}

function showPortfolio(){
	document.getElementById('home').style.display = 'none';
	document.getElementById('uslugi').style.display = 'none';
	document.getElementById('mary').style.display = 'none';
	document.getElementById('zabiegi').style.display = 'none';
	document.getElementById('cennik').style.display = 'none';
	document.getElementById('galeria').style.display = 'none';
	document.getElementById('portfolio').style.display = '';
	document.getElementById('kontakt').style.display = 'none';

	document.getElementById('home_li').classList.remove('active');
	document.getElementById('uslugi_li').classList.remove('active');
	document.getElementById('mary_li').classList.remove('active');
	document.getElementById('zabiegi_li').classList.remove('active');
	document.getElementById('cennik_li').classList.remove('active');
	document.getElementById('galeria_li').classList.remove('active');
	document.getElementById('portfolio_li').classList.add('active');
	document.getElementById('kontakt_li').classList.remove('active');
}

function showKontakt(){
	document.getElementById('home').style.display = 'none';
	document.getElementById('uslugi').style.display = 'none';
	document.getElementById('mary').style.display = 'none';
	document.getElementById('zabiegi').style.display = 'none';
	document.getElementById('cennik').style.display = 'none';
	document.getElementById('galeria').style.display = 'none';
	document.getElementById('portfolio').style.display = 'none';
	document.getElementById('kontakt').style.display = '';

	document.getElementById('home_li').classList.remove('active');
	document.getElementById('uslugi_li').classList.remove('active');
	document.getElementById('mary_li').classList.remove('active');
	document.getElementById('zabiegi_li').classList.remove('active');
	document.getElementById('cennik_li').classList.remove('active');
	document.getElementById('galeria_li').classList.remove('active');
	document.getElementById('portfolio_li').classList.remove('active');
	document.getElementById('kontakt_li').classList.add('active');
}