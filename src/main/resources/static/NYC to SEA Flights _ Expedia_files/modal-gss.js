/**
 * Created by rlnu on 6/13/18.
 */

if (!GlobalSigninSignup) var  GlobalSigninSignup = {};

function loadGSS(userState,signinButtonEnabled,showMobileAccountMenu, originatingCountry, googleEnabled, naverEnabled,locale, dctk, $){
    if(originatingCountry !== 'cn') {
        var shouldGssBeOnForThisPage = GlobalSigninSignup.isGSSEnabledOnThePage();
        if (shouldGssBeOnForThisPage) {
            GlobalSigninSignup.loadJS("https://a.travel-assets.com/gss-loader/user/gss/1.0.75/gss-modal-all-min.js");
            GlobalSigninSignup.loadCSS("https://a.travel-assets.com/gss-loader/user/gss-content/1.0.75/styles/gss.css");
            $.ajax({
                url: '/user/global-login',
                type: 'GET',
                success: function (result) {
                    require(['gss-modal'], function (modal) {
                        GlobalSigninSignup.initModal(result, modal, googleEnabled, naverEnabled,locale,userState);
                        if (userState === 'identified' || userState === 'authenticated') {
                            if (GlobalSigninSignup.isMobile() === true && showMobileAccountMenu) {
                                GlobalSigninSignup.setupGSS(null, GlobalSigninSignup.elemById("account-menu-myaccount"), "href", modal, userState);
                            } else {
                                GlobalSigninSignup.setupGSS(null, GlobalSigninSignup.elemById("header-account-myaccount"), "href", modal, userState);
                            }
                        }
                        else {
                            if (GlobalSigninSignup.isMobile() === true && showMobileAccountMenu) {
                                GlobalSigninSignup.removeIfExist(GlobalSigninSignup.elemById("header-accountMenu-signin"), "data-onclick");
                                GlobalSigninSignup.setupGSS(GlobalSigninSignup.elemById("header-account-signup"), GlobalSigninSignup.elemById("header-accountMenu-signin"), "onclick", modal, userState);
                            } else {
                                var signInId = "header-account-signin";
                                var attributeClicked = "data-onclick";
                                if (signinButtonEnabled) {
                                    GlobalSigninSignup.removeIfExist(GlobalSigninSignup.elemById("header-account-signin"), "href");
                                    GlobalSigninSignup.removeIfExist(GlobalSigninSignup.elemById("header-account-signin"), "data-onclick");
                                    signInId = "header-account-signin-button";
                                    attributeClicked = "onclick";
                                }
                                GlobalSigninSignup.setupGSS(GlobalSigninSignup.elemById("header-account-register"), GlobalSigninSignup.elemById(signInId), attributeClicked, modal, userState);
                            }
                        }
                    });
                }
            });
        }
    }
    else{
        dctk.loggingAdapter.logMessage('GSS_MODAL_ORIGINATED_FROM_CHINA');
    }
}

GlobalSigninSignup.isGSSEnabledOnThePage = function() {
    var pathName = window.location.pathname;
    if(pathName === '/' || pathName.indexOf('/gc/') > -1 || window.location.host.indexOf('localhost') > -1 ){
        return false;
    }else if (pathName.indexOf('Flights-Search') > -1 ){
        return true;
    }else{
        return false;
    }
};

GlobalSigninSignup.isMobile= function() {
    return window.innerWidth <= 725;
};

GlobalSigninSignup.setupGSS= function(SignUpElem, SignInElem, attributeClicked, modal, userState){
    if(userState === 'identified' || userState === 'authenticated'){
        var accountRedirect= SignInElem.getAttribute(attributeClicked);
        GlobalSigninSignup.removeIfExist(SignInElem,attributeClicked);

        SignInElem.addEventListener('click', function (e) {
            e.preventDefault();
            var target = $(this);
            if(userState === 'authenticated'){
                $.ajax({
                    url: '/gc/getUserState.json',
                    type: 'GET',
                    async: false,
                    success: function (response) {
                        if(response.authenticated){
                            userState= 'authenticated';
                        }else{
                            userState= 'identified'
                        }
                    }
                });
            }
            if(userState === 'identified') {
                GlobalSigninSignup.openModal(null, SignInElem, "page.Account.GSS.SignIn", null, accountRedirect,attributeClicked,target, modal);
            } else {
                GlobalSigninSignup.addAttribute(SignInElem,attributeClicked,accountRedirect);
                target.trigger('click');
            }
        });

    }
    if(GlobalSigninSignup.ifAccountMenuExists(SignInElem, SignUpElem)) {
        var signUpData = SignUpElem.getAttribute("data-onclick");
        GlobalSigninSignup.removeIfExist(SignUpElem, "data-onclick");
        var signInData = SignInElem.getAttribute(attributeClicked);
        GlobalSigninSignup.removeIfExist(SignInElem, attributeClicked);

        GlobalSigninSignup.addAttribute(SignInElem,"onclick", "xp.nav.trackAnalytics(this,'a','Header.SignIn')");
        GlobalSigninSignup.addAttribute(SignUpElem,"onclick", "xp.nav.trackAnalytics(this,'a','Header.CreateAccount')");

        SignUpElem.addEventListener('click', function (e) {
            e.preventDefault();
            var target = $(this);
            GlobalSigninSignup.openModal(SignUpElem, SignInElem, "page.Account.GSS.CreateAccount", signUpData, signInData,"data-onclick", target, modal);
        });

        SignInElem.addEventListener('click', function (e) {
            e.preventDefault();
            var target = $(this);
            GlobalSigninSignup.openModal(SignUpElem, SignInElem, "page.Account.GSS.SignIn", signUpData, signInData,attributeClicked,target, modal);
        });
    }
};
GlobalSigninSignup.openModal=function(signUpElem, signInElem, pageName, signUpData, signInData, attribute, target,modal){
    dctk.evaluateExperimentAndLog({id: 26398, callback: function(experiment) {
        if(!experiment.error && experiment.value > 1){
            if ( (typeof dctk) !== 'undefined' && dctk !== null){
                dctk.onReady(function () {
                    dctk.omtr.pageName = pageName;
                    dctk.omtr.t();
                });
            }
            if(pageName === "page.Account.GSS.CreateAccount"){
                modal.openSignUp();
            } else {
                modal.openSignIn();
            }
        } else {
            if(signUpElem === null) {
                GlobalSigninSignup.addAttribute(signInElem,attribute, signInData);
            } else{
                GlobalSigninSignup.addAttribute(signUpElem, "data-onclick", signUpData);
                GlobalSigninSignup.addAttribute(signInElem, attribute, signInData);
            }
            target.trigger('click');
        }
    }});
};
GlobalSigninSignup.elemById = function(id){
    return document.getElementById(id);
};

GlobalSigninSignup.ifAccountMenuExists =  function(signInButton, signUpButton){
    return (typeof signInButton !== 'undefined' && typeof signUpButton !== 'undefined' && signInButton !== null && signUpButton !== null)
};

GlobalSigninSignup.removeIfExist= function(element, attribute){
    if (typeof element !== 'undefined' && element !== null){
        element.removeAttribute(attribute);
    }
};

GlobalSigninSignup.addAttribute= function(element, attribute, value){
    if (typeof element !== 'undefined' && element !== null){
        element.setAttribute(attribute,value);
    }
};

GlobalSigninSignup.initModal = function(result,modal, googleEnabled, naverEnabled,locale, userState){
    var gssParams = {
        showLoyaltyCheckBox: true,
        showGoogleSignInSignUp : (googleEnabled === '1'),
        showNaverSignInSignUp : (naverEnabled === '1'),
        locale : locale
    };
    if (userState==='identified'){
        gssParams.rurl = GlobalSigninSignup.elemById("header-account-myaccount").pathname;
    }
    if ( window.alertMenuRequestIds && window.alertMenuRequestIds.SITEID ) {
        gssParams.siteid = window.alertMenuRequestIds.SITEID;
    }

    if ( window.alertMenuRequestIds && window.alertMenuRequestIds.LANGID ) {
        gssParams.langid = window.alertMenuRequestIds.LANGID;
    }
    modal.init(result, gssParams);
};

GlobalSigninSignup.loadJS=function(url){
    var scriptElement = document.createElement("script");
    scriptElement.type = "application/javascript";
    scriptElement.src = url;
    scriptElement.async = true;
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
};
GlobalSigninSignup.loadCSS= function(url) {
    var scriptElement = document.createElement("link");
    scriptElement.rel = "stylesheet";
    scriptElement.type = 'text/css';
    scriptElement.href = url;
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
};