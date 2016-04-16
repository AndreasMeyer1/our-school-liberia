var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};


/**
 * Langages can either share a route or specify explicit route paths.
 *
 * The key is the name of the route, not the path. it is used to lookup 
 * respective routes for alternate languages.
 *
 * If the controller is set to false, it is assumed to be a static page
 * in this case the template needs to be specified.
 *
 * Templates are either specified as a sharedTemplate (the name of a template view)
 * or as a templatePrefix, which will have -en -de appended on and expect that template
 * view to exist.
 * 
 */

module.exports = {

	'home': {
		controller: routes.views.index,
		section: null,
		route: '/'
	},
	'about': {
		section: 'about',
		controller: false,
		sharedTemplate: 'about',
		languages: {
			'en': {
				route: '/about',
			},
			'de': {
				route: '/etwa',
			},
		}
	},
	
	'about.whatwedo' : {
		section: 'about',
		controller: false,
		sharedTemplate: 'about-whatwedo',
		languages: {
			'en': {
				route: '/about/what-we-do',
			},
			'de': {
				route: '/etwa/vhat-ve-do',
			},
		}
	},
	'about.wherewework' : {
		section: 'about',
		controller: false,
		sharedTemplate: 'about-wherewework',
		languages: {
			'en': {
				route: '/about/where-we-work',
			},
			'de': {
				route: '/etwa/wo-wir-arbeiten',
			},
		}
	},

	'about.ourteam' : {
		section: 'about',
		controller: false,
		sharedTemplate: 'about-ourteam',
		languages: {
			'en': {
				route: '/about/our-team',
			},
			'de': {
				route: '/etwa/unser-team',
			},
		}
	},

	'about.ourstudents' : {
		section: 'about',
		controller: false,
		sharedTemplate: 'about-ourstudents',
		languages: {
			'en': {
				route: '/about/our-students',
			},
			'de': {
				route: '/etwa/unser-studenten',
			},
		}
	},

	'about.supporters' : {
		section: 'about',
		controller: false,
		sharedTemplate: 'about-supporters',
		languages: {
			'en': {
				route: '/about/supporters',
			},
			'de': {
				route: '/etwa/unterstutzer',
			},
		}
	},	

	'about.financials' : {
		section: 'about',
		controller: false,
		sharedTemplate: 'about-financials',
		languages: {
			'en': {
				route: '/about/financials',
			},
			'de': {
				route: '/etwa/finanzen',
			},
		}
	},	


	'donate': {
		method: 'all',
		section: 'donate',
		controller: routes.views.donate,
		languages: {
			'en': {
				route: '/donate'
			},
			'de': {
				route: '/spenden'
			}
		}
	},


	'getinvolved': {
		section: 'getinvolved',
		controller: false,
		sharedTemplate: 'get-involved',
		languages: {
			'en': {
				route: '/get-involved',
			},
			'de': {
				route: '/sich-einlassen',
			},
		}
	},
	'getinvolved.subscribe' : {
		section: 'getinvolved',
		controller: false,
		sharedTemplate: 'get-involved-subscribe',
		languages: {
			'en': {
				route: '/get-involved/subscribe',
			},
			'de': {
				route: '/sich-einlassen/abonnieren',
			},
		}
	},
	'getinvolved.events' : {
		section: 'getinvolved',
		controller: false,
		sharedTemplate: 'get-involved-events',
		languages: {
			'en': {
				route: '/get-involved/events',
			},
			'de': {
				route: '/sich-einlassen/veranstaltungen',
			},
		}
	},
	'getinvolved.fundraise' : {
		section: 'getinvolved',
		controller: false,
		sharedTemplate: 'get-involved-fundraise',
		languages: {
			'en': {
				route: '/get-involved/fundraise',
			},
			'de': {
				route: '/sich-einlassen/fundraising',
			},
		}
	},
	'getinvolved.volunteer' : {
		section: 'getinvolved',
		controller: false,
		sharedTemplate: 'get-involved-volunteer',
		languages: {
			'en': {
				route: '/get-involved/volunteer',
			},
			'de': {
				route: '/sich-einlassen/sich-freiwillig-melden',
			},
		}
	},

	/**
	 * 	TIP:
	 *	see how this one has a controller? if you look at it (routes/views/updates.js)
	 *	it does a bit of prep such as load in the updates from the database and make
	 *	them available in the 'locals' variable which the template can access.
	 *	
	 *	If you look right at the bottom it will say view.render('updates')
	 *	this string is the template it uses. so instead of dynamically configuring the
	 *	template name here, it is manually loaded from within the controller.
	 */
	'news.updates': {
		section: 'news',
		controller: routes.views.updates,
		languages: {
			'en': {
				route: '/news/updates'
			},
			'de': {
				route: '/newsen/updaten'
			}
		}
	},
	'news.updates:post': {
		section: 'news',
		controller: routes.views.update,
		languages: {
			'en': {
				route: '/news/updates/:post'
			},
			'de': {
				route: '/newsen/updaten/:post'
			}
		}
	},
	'news.updates.category:category': {
		section: 'news',
		controller: routes.views.updates,
		languages: {
			'en': {
				route: '/news/updates/category/:category'
			},
			'de': {
				route: '/newsen/updaten/category/:category'
			}
		}
	},
	'contact': {
		controller: routes.views.contact,
		section: 'contact',
		route: '/contact',
		method: 'all'
	},
}