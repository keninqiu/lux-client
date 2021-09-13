(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6351],{95432:function(e,t,a){"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(63804)),o=n(a(45697)),l=n(a(76862)),i=n(a(61350)),s=a(83656),u=n(a(37572)),c=function(e){var t,a=e.className,n=e.currencyCode,o=e.entityType,c=e.related,d=e.reportTypeToShow,f=e.showDiff,m=e.overallAvgPay,p=e.blurb,g=e.maxCards,y=e.cardWidth;if(!c)return null;if(f){if(!m)return null;t=c.map((function(e,t){var a=e.range[50]||e.range.average,n=Math.round((a-m)/m*100),o=0===n?"":n>0?"positive":"negative";return r.default.createElement(i.default,{key:"".concat(t).concat(e.name),className:o,title:e.name,titleLink:e.url,subtitle:r.default.createElement(r.default.Fragment,null,r.default.createElement("span",{className:"".concat(o,"-delta")},0===n?"":n>0?"\u25b2":"\u25bc")," ",Math.abs(n),"%"),logoProps:{entityType:"col",entity:e.name}})}))}else c.sort((function(e,t){return t.value-e.value})),t=c.map((function(e,t){var a=e.range[50]||e.range.average;return r.default.createElement(i.default,{key:"".concat(t).concat(e.name),title:e.name,titleLink:e.url,subtitle:"Avg. ".concat(d,": ").concat((0,s.FormatCurrency)(a,n)),logoProps:{entityType:o,entity:e.name}})}));return r.default.createElement(r.default.Fragment,null,r.default.createElement(l.default,{className:"related-carousel".concat(a&&" ".concat(a)),maxCards:g,cardWidth:y,items:t}),p&&r.default.createElement(u.default,{className:"section-desc related-carousel__blurb",text:p,truncateLength:330}))};c.propTypes={className:o.default.string,blurb:o.default.string,currencyCode:o.default.string,entityType:o.default.string,related:o.default.array,reportTypeToShow:o.default.string,showDiff:o.default.bool,overallAvgPay:o.default.number,maxCards:o.default.number,cardWidth:o.default.number},c.defaultProps={entityType:"employer",showDiff:!1,maxCards:4,cardWidth:152,currencyCode:"USD"};var d=c;t.default=d},40966:function(e,t,a){"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.formatLocation=t.allowCountry=t.AllowCountry=t.loadJobListings=t.LoadJobListings=void 0;var r=n(a(87757)),o=n(a(48926)),l=n(a(63144)),i=function(){var e=(0,o.default)(r.default.mark((function e(t,a,n,o,l){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(t,a,n,o,l));case 1:case"end":return e.stop()}}),e)})));return function(t,a,n,r,o){return e.apply(this,arguments)}}();t.LoadJobListings=i;var s=function(){var e=(0,o.default)(r.default.mark((function e(t,a,n,i,s,u){var c;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="search=".concat(a||"","&location=").concat(n,"&max=").concat(i,"&page=").concat(s,"&locationSearch=").concat(u?"true":"false"),e.abrupt("return",(0,l.default)("".concat(t,"/joblistings/v1/listings?").concat(c),{headers:{Accept:"application/json"}}).then(function(){var e=(0,o.default)(r.default.mark((function e(t){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.ok?t.json():{});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){})));case 2:case"end":return e.stop()}}),e)})));return function(t,a,n,r,o,l){return e.apply(this,arguments)}}();t.loadJobListings=s;var u=["united states","united kingdom","canada","australia"];t.AllowCountry=function(e){return c(e)};var c=function(e){return!("string"===typeof e&&e.length>0)||u.includes(e.toLowerCase())};t.allowCountry=c;t.formatLocation=function(e){var t="";return e.City?(t+=e.City,e.State&&(t+=", ".concat(e.State))):t=!e.City&&e.State?e.State:"United States",t}},90563:function(e,t,a){"use strict";var n=a(20862),r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(63038)),l=n(a(63804)),i=r(a(45697)),s=a(40966),u=r(a(75965)),c=r(a(85931)),d=a(30374),f=function(e){var t=e.displayAsColumn,a=(0,l.useState)(e.country),n=(0,o.default)(a,2),r=n[0],i=n[1],f=(0,l.useState)(null),m=(0,o.default)(f,2),p=m[0],g=m[1],y=(0,l.useState)(e.location),h=(0,o.default)(y,2),b=h[0],v=h[1],_=(0,l.useState)(e.title),N=(0,o.default)(_,2),w=N[0],C=N[1];(0,l.useEffect)((function(){var t=e.geotargetUrl;b?E(b,r):t?(0,d.geotarget)(t).then((function(e){var t=(0,s.formatLocation)(e);v(t),i(e.Country||"United States"),E(t,e.Country||"United States")})):E("United States","United States")}),[]);var j,E=function(t,a){var n=e.url,r=e.numListings,o=e.allowEmptyJobTitle;(0,s.allowCountry)(a)||g([]),w||o?(0,s.loadJobListings)(n,w,t,r,1,o).then((function(e){e&&e.jobs&&g(e.jobs)})):g([])};return p&&(j=p.map((function(e,t){return l.default.createElement(u.default,{truncate:!0,data:e,key:"".concat("".concat(e.title,"-").concat(t)," ",e.date)})}))),l.default.createElement("div",{id:"jobListingsWidget",className:"joblistings"},p&&l.default.createElement("div",{className:"joblistings__listings-container"},j&&j.length>0?j:w?"No results found.":""),p&&p.length>0?l.default.createElement("a",{href:"/job-search-engine?str=".concat(w,"&loc=").concat(b,"&country=").concat(r),className:"joblistings__seemore-cta",target:"_blank",rel:"noopener"},"View More Jobs \xbb"):null,l.default.createElement(c.default,{country:r,location:b,onChangeLocation:function(e,t){v(t)},onChangeTitle:function(e,t){C(t)},title:w,displayAsColumn:t,showZipLogo:!1}))};f.propTypes={allowEmptyJobTitle:i.default.bool,country:i.default.string,displayAsColumn:i.default.bool,geotargetUrl:i.default.string,location:i.default.string,numListings:i.default.number,title:i.default.string,url:i.default.string},f.defaultProps={allowEmptyJobTitle:!1,displayAsColumn:!1,geotargetUrl:"https://www.payscale.com/geotarget/v1/City"},f.__docgenInfo={description:"",methods:[],displayName:"JobListings",props:{allowEmptyJobTitle:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Search even if job title was empty. Default is false."},displayAsColumn:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Whether to display the widget in a column or not. False if not provided"},geotargetUrl:{defaultValue:{value:"'https://www.payscale.com/geotarget/v1/City'",computed:!1},type:{name:"string"},required:!1,description:"Geotarget service URL to geotarget user by IP address."},country:{type:{name:"string"},required:!1,description:"Country to search for listings."},location:{type:{name:"string"},required:!1,description:"Location to search for listings. If not provided, then will geolocate user instead if geotargetUrl provided."},numListings:{type:{name:"number"},required:!1,description:"Number of listings to display."},title:{type:{name:"string"},required:!1,description:"Job title to search for listings."},url:{type:{name:"string"},required:!1,description:"Job listings search URL."}}};var m=f;t.default=m},61350:function(e,t,a){"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.getAcronym=h,t.default=void 0;var r=n(a(67154)),o=n(a(34575)),l=n(a(93913)),i=n(a(81506)),s=n(a(2205)),u=n(a(78585)),c=n(a(29754)),d=n(a(59713)),f=n(a(63804)),m=n(a(45697)),p=n(a(1216)),g=n(a(71216));function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,c.default)(e);if(t){var r=(0,c.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,u.default)(this,a)}}function h(e,t){var a=e;return-1!==a.indexOf(",")&&(a=a.substr(0,a.indexOf(","))),1!==a.indexOf("and")&&(a=a.replace(new RegExp(/and/g,"i"),"")),-1!==a.indexOf("(")&&(a=a.substr(0,a.indexOf("("))+a.substr(a.indexOf(")"),a.length)),a.match(/\b(\w)/g).join("").toUpperCase().substr(0,t)}var b=function(e){(0,s.default)(a,e);var t=y(a);function a(e){var n;(0,o.default)(this,a),n=t.call(this,e),(0,d.default)((0,i.default)(n),"handleNotFound",(function(){n.setState({showAcronym:!0})})),(0,d.default)((0,i.default)(n),"renderImage",(function(e){return e?f.default.createElement(p.default,{height:70,once:!0},f.default.createElement(g.default,(0,r.default)({className:"related-content-card__image-container__image"},e))):null}));var l=e.showAcronym,s=e.logoProps;return n.state={showAcronym:!(s||!l)},n}return(0,l.default)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.numLetters,n=e.className,r=e.titleLink,o=e.subtitle,l=e.hideLogo,i=this.state.showAcronym?h(t,a):"",s=this.props.logoProps;return s&&(s.handleNotFound=this.props.showAcronym?this.handleNotFound:null),t&&r?f.default.createElement("a",{"data-instant":!0,className:"related-content-card".concat(n?" ".concat(n):""),href:r},f.default.createElement("div",{className:"related-content-card__image-container"},i&&f.default.createElement("div",{className:"related-content-card__image-container__text"},i),!l&&this.renderImage(s)),f.default.createElement("div",{className:"related-content-card__title"},t),f.default.createElement("div",{className:"related-content-card__subtitle"},o)):null}}]),a}(f.default.Component);b.propTypes={className:m.default.string,hideLogo:m.default.bool,logoProps:m.default.shape({entity:m.default.string,entityType:m.default.oneOf(["employer","job","school","degree","col","industry","skill","state","country"]),handleNotFound:m.default.func,placeholder:m.default.string,url:m.default.string}),numLetters:m.default.number,showAcronym:m.default.bool,subtitle:m.default.any,title:m.default.string,titleLink:m.default.string},b.defaultProps={className:"",numLetters:3},b.__docgenInfo={description:"",methods:[{name:"handleNotFound",docblock:null,modifiers:[],params:[],returns:null},{name:"renderImage",docblock:null,modifiers:[],params:[{name:"logoProps",type:null}],returns:null}],displayName:"RelatedContentCard",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"Optional class name"},numLetters:{defaultValue:{value:"3",computed:!1},type:{name:"number"},required:!1,description:"Number of letters to display in the acronym"},hideLogo:{type:{name:"bool"},required:!1,description:"Force hiding of the logo image (for perf)"},logoProps:{type:{name:"shape",value:{entity:{name:"string",required:!1},entityType:{name:"enum",value:[{value:"'employer'",computed:!1},{value:"'job'",computed:!1},{value:"'school'",computed:!1},{value:"'degree'",computed:!1},{value:"'col'",computed:!1},{value:"'industry'",computed:!1},{value:"'skill'",computed:!1},{value:"'state'",computed:!1},{value:"'country'",computed:!1}],required:!1},handleNotFound:{name:"func",required:!1},placeholder:{name:"string",required:!1},url:{name:"string",required:!1}}},required:!1,description:"Set of props for logo displayed in component."},showAcronym:{type:{name:"bool"},required:!1,description:"Boolean for whether to show the acronym generated from the title"},subtitle:{type:{name:"any"},required:!1,description:"Optional subtitle for the card"},title:{type:{name:"string"},required:!1,description:"The title of the card"},titleLink:{type:{name:"string"},required:!1,description:"The URL that the title will link to"}}};var v=b;t.default=v},75965:function(e,t,a){"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(63804)),o=n(a(45697)),l=a(83656),i=n(a(43726)),s=function(e){var t=e.data,a=e.truncate,n=(0,i.default)(t.description),o=a?"".concat((0,l.truncateAndSplitTextAtWordBreak)(n,125)[0],"..."):n;return r.default.createElement("div",{className:"joblistings__job"},r.default.createElement("a",{className:"joblistings__job-title",href:t.url,target:"_blank"},t.title),r.default.createElement("div",{className:"joblistings__job-details-container"},r.default.createElement("div",{className:"joblistings__job-company"},r.default.createElement("i",{className:"icon-building-filled"}),t.companyName),t.city&&t.state?r.default.createElement("div",{className:"joblistings__job-location"},r.default.createElement("i",{className:"icon-location"}),t.city,", ",t.state):null),r.default.createElement("div",{className:"joblistings__job-description",dangerouslySetInnerHTML:{__html:o}}),r.default.createElement("a",{className:"joblistings__job-cta",href:t.url,target:"_blank"},"View More Details"))};s.__docgenInfo={description:"",methods:[],displayName:"JobListingItem",props:{truncate:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"shorten the descriptions"},data:{type:{name:"shape",value:{title:{name:"string",required:!1},city:{name:"string",required:!1},companyName:{name:"string",required:!1},state:{name:"string",required:!1},country:{name:"string",required:!1},date:{name:"instanceOf",value:"Date",required:!1},description:{name:"string",required:!1},url:{name:"string",required:!1}}},required:!1,description:""}}};var u=s;t.default=u,s.propTypes={data:o.default.shape({title:o.default.string,city:o.default.string,companyName:o.default.string,state:o.default.string,country:o.default.string,date:o.default.instanceOf(Date),description:o.default.string,url:o.default.string}),truncate:o.default.bool},s.defaultProps={truncate:!1}},85931:function(e,t,a){"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(63804)),o=n(a(45697)),l=n(a(1216)),i=n(a(54686)),s=function(e){var t=e.title,a=e.location,n=e.country,o=e.onChangeTitle,s=e.onChangeLocation,u=e.displayAsColumn,c=e.showZipLogo;return r.default.createElement("div",{className:"joblistings__search-container"},c&&r.default.createElement("div",{className:"joblistings__search-header"},"Search for more jobs",r.default.createElement(l.default,{height:30,offset:100,once:!0},r.default.createElement("img",{src:"https://cdn-payscale.com/content/ziprecruiter-logo-min.svg",className:"joblistings__image",alt:"Zip Recruiter Logo"}))),r.default.createElement("div",{className:"joblistings__search-form".concat(u?"--column":"")},r.default.createElement("div",{className:"joblistings__search-item"},r.default.createElement("label",{className:"joblistings__search-label"}," Job Title / Company "),r.default.createElement(i.default,{name:"jobsearchbox",className:"joblistings__search-box",value:t||"",onChange:o,placeholder:"Job Title or Company"})),r.default.createElement("div",{className:"joblistings__search-item"},r.default.createElement("label",{className:"joblistings__search-label"}," Location "),r.default.createElement(i.default,{name:"locationsearchbox",className:"joblistings__search-box",value:a||"",onChange:s,placeholder:"City, State or Zip"})),r.default.createElement("a",{href:"/job-search-engine?str=".concat(t,"&loc=").concat(a,"&country=").concat(n),className:"joblistings__search-btn"},"Search")))};s.propTypes={country:o.default.string,displayAsColumn:o.default.bool,location:o.default.string,onChangeLocation:o.default.func,onChangeTitle:o.default.func,title:o.default.string,showZipLogo:o.default.bool},s.defaultProps={showZipLogo:!0},s.__docgenInfo={description:"",methods:[],displayName:"JobListingSearch",props:{showZipLogo:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},country:{type:{name:"string"},required:!1,description:""},displayAsColumn:{type:{name:"bool"},required:!1,description:""},location:{type:{name:"string"},required:!1,description:""},onChangeLocation:{type:{name:"func"},required:!1,description:""},onChangeTitle:{type:{name:"func"},required:!1,description:""},title:{type:{name:"string"},required:!1,description:""}}};var u=s;t.default=u}}]);