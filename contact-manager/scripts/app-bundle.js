define('IContact',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJJQ29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6InNyYyJ9

define('IUser',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJJVXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "./web-api"], function (require, exports, aurelia_framework_1, web_api_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(api) {
            this.api = api;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Contacts';
            config.map([
                { route: '', moduleId: 'no-selection', title: 'Select' },
                { route: 'contact/:id', moduleId: 'contact-detail', name: 'contacts' },
                { route: 'new', moduleId: 'contact-detail', name: 'new-contact' }
            ]);
            this.router = router;
        };
        App.prototype.addNew = function () {
            console.log('click');
            return true;
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.inject(web_api_1.WebAPI),
        __metadata("design:paramtypes", [web_api_1.WebAPI])
    ], App);
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLEdBQUc7UUFHZCxhQUFtQixHQUFXO1lBQVgsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUFJLENBQUM7UUFFbkMsNkJBQWUsR0FBZixVQUFpQixNQUEyQixFQUFFLE1BQWM7WUFDMUQsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7WUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDVCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO2dCQUN2RCxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7Z0JBQ3JFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBQzthQUNqRSxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBRUQsb0JBQU0sR0FBTjtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFDSCxVQUFDO0lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtJQXBCWSxHQUFHO1FBRGYsMEJBQU0sQ0FBQyxnQkFBTSxDQUFDO3lDQUlXLGdCQUFNO09BSG5CLEdBQUcsQ0FvQmY7SUFwQlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9ufSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtXZWJBUEl9IGZyb20gJy4vd2ViLWFwaSc7XG5cbkBpbmplY3QoV2ViQVBJKVxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHJvdXRlcjogUm91dGVyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcGk6IFdlYkFQSSkgeyB9XG5cbiAgY29uZmlndXJlUm91dGVyKCBjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XG4gICAgY29uZmlnLnRpdGxlID0gJ0NvbnRhY3RzJztcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6ICcnLCBtb2R1bGVJZDogJ25vLXNlbGVjdGlvbicsIHRpdGxlOiAnU2VsZWN0J30sXG4gICAgICB7IHJvdXRlOiAnY29udGFjdC86aWQnLCBtb2R1bGVJZDogJ2NvbnRhY3QtZGV0YWlsJywgbmFtZTogJ2NvbnRhY3RzJ30sXG4gICAgICB7IHJvdXRlOiAnbmV3JywgbW9kdWxlSWQ6ICdjb250YWN0LWRldGFpbCcsIG5hbWU6ICduZXctY29udGFjdCd9XG4gICAgXSk7XG5cbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxuXG4gIGFkZE5ldygpIHtcbiAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('contact-detail',["require", "exports", "aurelia-router", "aurelia-framework", "aurelia-event-aggregator", "./web-api", "./messages", "./utility"], function (require, exports, aurelia_router_1, aurelia_framework_1, aurelia_event_aggregator_1, web_api_1, messages_1, utility_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactDetail = (function () {
        function ContactDetail(api, ea, router) {
            this.api = api;
            this.ea = ea;
            this.router = router;
        }
        ContactDetail.prototype.activate = function (params, routeConfig, c, d) {
            var _this = this;
            this.routeConfig = routeConfig;
            console.log(c, d);
            if (this.routeConfig.name !== 'new-contact') {
                return this.api.getContactDetails(params.id).then(function (contact) {
                    _this.contact = contact;
                    _this.routeConfig.navModel.setTitle(_this.contact.firstName);
                    _this.originalContact = JSON.parse(JSON.stringify(_this.contact));
                    _this.ea.publish(new messages_1.ContactViewed(_this.contact));
                });
            }
            else {
                this.contact = {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: ''
                };
                this.routeConfig.navModel.setTitle('Create Contact');
                this.originalContact = JSON.parse(JSON.stringify(this.contact));
            }
        };
        Object.defineProperty(ContactDetail.prototype, "canSave", {
            get: function () {
                return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactDetail.prototype, "canDelete", {
            get: function () {
                return this.contact.id;
            },
            enumerable: true,
            configurable: true
        });
        ContactDetail.prototype.delete = function () {
            this.ea.publish(new messages_1.ContactDelete(this.contact));
        };
        ContactDetail.prototype.save = function () {
            var _this = this;
            if (this.routeConfig.name == 'new-contact') {
                if (this.contact.firstName && this.contact.lastName && this.contact.phoneNumber && this.contact.email) {
                    this.api.saveContact(this.contact).then(function (data) {
                        _this.contact.id = data.id;
                        _this.originalContact = JSON.parse(JSON.stringify(_this.contact));
                        _this.ea.publish(new messages_1.ContactSaved(_this.contact));
                        _this.router.navigate('contact/' + _this.contact.id);
                    });
                }
                else {
                    alert('Please provide all fields.');
                }
            }
            else {
                this.api.updateContact(this.contact).then(function (contact) {
                    _this.contact = contact;
                    _this.routeConfig.navModel.setTitle(_this.contact.firstName);
                    _this.originalContact = JSON.parse(JSON.stringify(_this.contact));
                    console.log(_this.contact);
                    _this.ea.publish(new messages_1.ContactUpdated(_this.contact));
                });
            }
        };
        ContactDetail.prototype.canDeactivate = function () {
            if (!utility_1.areEqual(this.originalContact, this.contact)) {
                var result = confirm('You have unsaved changes. Are you sure you wish to leave?');
                if (!result) {
                    this.ea.publish(new messages_1.ContactViewed(this.contact));
                }
                return result;
            }
            return true;
        };
        return ContactDetail;
    }());
    ContactDetail = __decorate([
        aurelia_framework_1.inject(web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator, aurelia_router_1.Router),
        __metadata("design:paramtypes", [web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator, aurelia_router_1.Router])
    ], ContactDetail);
    exports.ContactDetail = ContactDetail;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LE9BQU8sQ0FBQyxJQUFJLHlCQUFjLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztRQUNILENBQUM7UUFFRCxxQ0FBYSxHQUFiO1lBQ0UsRUFBRSxDQUFBLENBQUMsQ0FBQyxrQkFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7Z0JBRWxGLEVBQUUsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLHdCQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELENBQUM7Z0JBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNoQixDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFDSCxvQkFBQztJQUFELENBaEZBLEFBZ0ZDLElBQUE7SUFoRlksYUFBYTtRQUR6QiwwQkFBTSxDQUFDLGdCQUFNLEVBQUUsMENBQWUsRUFBRSx1QkFBTSxDQUFDO3lDQU1iLGdCQUFNLEVBQWMsMENBQWUsRUFBaUIsdUJBQU07T0FMeEUsYUFBYSxDQWdGekI7SUFoRlksc0NBQWEiLCJmaWxlIjoiY29udGFjdC1kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHtXZWJBUEl9IGZyb20gJy4vd2ViLWFwaSc7XG5pbXBvcnQge0NvbnRhY3RVcGRhdGVkLCBDb250YWN0Vmlld2VkLCBDb250YWN0U2F2ZWQsIENvbnRhY3REZWxldGV9IGZyb20gJy4vbWVzc2FnZXMnO1xuaW1wb3J0IHthcmVFcXVhbH0gZnJvbSAnLi91dGlsaXR5JztcbmltcG9ydCB7Q29udGFjdH0gZnJvbSAnLi9JQ29udGFjdCc7IFxuXG5AaW5qZWN0KFdlYkFQSSwgRXZlbnRBZ2dyZWdhdG9yLCBSb3V0ZXIpXG5leHBvcnQgY2xhc3MgQ29udGFjdERldGFpbCB7XG4gIHJvdXRlQ29uZmlnO1xuICBjb250YWN0OiBDb250YWN0O1xuICBvcmlnaW5hbENvbnRhY3Q6IENvbnRhY3Q7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IFdlYkFQSSwgcHJpdmF0ZSBlYTogRXZlbnRBZ2dyZWdhdG9yLCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHsgfVxuXG4gIGFjdGl2YXRlKHBhcmFtcywgcm91dGVDb25maWcsIGMsIGQpIHtcbiAgICB0aGlzLnJvdXRlQ29uZmlnID0gcm91dGVDb25maWc7IGNvbnNvbGUubG9nKGMsIGQpO1xuXG4gICAgaWYodGhpcy5yb3V0ZUNvbmZpZy5uYW1lICE9PSAnbmV3LWNvbnRhY3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy5hcGkuZ2V0Q29udGFjdERldGFpbHMocGFyYW1zLmlkKS50aGVuKGNvbnRhY3QgPT4ge1xuICAgICAgICB0aGlzLmNvbnRhY3QgPSA8Q29udGFjdD5jb250YWN0O1xuICAgICAgICB0aGlzLnJvdXRlQ29uZmlnLm5hdk1vZGVsLnNldFRpdGxlKHRoaXMuY29udGFjdC5maXJzdE5hbWUpO1xuICAgICAgICB0aGlzLm9yaWdpbmFsQ29udGFjdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5jb250YWN0KSk7XG4gICAgICAgIHRoaXMuZWEucHVibGlzaChuZXcgQ29udGFjdFZpZXdlZCh0aGlzLmNvbnRhY3QpKTtcbiAgICAgIH0pO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5jb250YWN0ID0gPENvbnRhY3Q+e1xuICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGhvbmVOdW1iZXI6ICcnXG4gICAgICB9XG4gICAgICB0aGlzLnJvdXRlQ29uZmlnLm5hdk1vZGVsLnNldFRpdGxlKCdDcmVhdGUgQ29udGFjdCcpO1xuICAgICAgdGhpcy5vcmlnaW5hbENvbnRhY3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuY29udGFjdCkpO1xuICAgICAgXG4gICAgfVxuXG4gICAgXG4gIH1cblxuICBnZXQgY2FuU2F2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWN0LmZpcnN0TmFtZSAmJiB0aGlzLmNvbnRhY3QubGFzdE5hbWUgJiYgIXRoaXMuYXBpLmlzUmVxdWVzdGluZztcbiAgfVxuXG4gIGdldCBjYW5EZWxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFjdC5pZCEhO1xuICB9XG5cbiAgZGVsZXRlKCkge1xuICAgIHRoaXMuZWEucHVibGlzaChuZXcgQ29udGFjdERlbGV0ZSh0aGlzLmNvbnRhY3QpKTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgaWYodGhpcy5yb3V0ZUNvbmZpZy5uYW1lID09ICduZXctY29udGFjdCcpIHtcbiAgICAgIGlmKHRoaXMuY29udGFjdC5maXJzdE5hbWUgJiYgdGhpcy5jb250YWN0Lmxhc3ROYW1lICYmIHRoaXMuY29udGFjdC5waG9uZU51bWJlciAmJiB0aGlzLmNvbnRhY3QuZW1haWwpIHtcbiAgICAgICAgdGhpcy5hcGkuc2F2ZUNvbnRhY3QodGhpcy5jb250YWN0KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGFjdC5pZCA9IGRhdGEuaWQ7XG4gICAgICAgICAgdGhpcy5vcmlnaW5hbENvbnRhY3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuY29udGFjdCkpO1xuICAgICAgICAgIHRoaXMuZWEucHVibGlzaChuZXcgQ29udGFjdFNhdmVkKHRoaXMuY29udGFjdCkpO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCdjb250YWN0LycgKyB0aGlzLmNvbnRhY3QuaWQpO1xuICAgICAgICB9KTtcbiAgICAgIH1lbHNle1xuICAgICAgICBhbGVydCgnUGxlYXNlIHByb3ZpZGUgYWxsIGZpZWxkcy4nKTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuYXBpLnVwZGF0ZUNvbnRhY3QodGhpcy5jb250YWN0KS50aGVuKGNvbnRhY3QgPT4ge1xuICAgICAgICB0aGlzLmNvbnRhY3QgPSA8Q29udGFjdD5jb250YWN0O1xuICAgICAgICB0aGlzLnJvdXRlQ29uZmlnLm5hdk1vZGVsLnNldFRpdGxlKHRoaXMuY29udGFjdC5maXJzdE5hbWUpO1xuICAgICAgICB0aGlzLm9yaWdpbmFsQ29udGFjdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5jb250YWN0KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGFjdCk7XG4gICAgICAgIHRoaXMuZWEucHVibGlzaChuZXcgQ29udGFjdFVwZGF0ZWQodGhpcy5jb250YWN0KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjYW5EZWFjdGl2YXRlKCkge1xuICAgIGlmKCFhcmVFcXVhbCh0aGlzLm9yaWdpbmFsQ29udGFjdCwgdGhpcy5jb250YWN0KSkge1xuICAgICAgbGV0IHJlc3VsdCA9IGNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcy4gQXJlIHlvdSBzdXJlIHlvdSB3aXNoIHRvIGxlYXZlPycpO1xuXG4gICAgICBpZighcmVzdWx0KSB7XG4gICAgICAgIHRoaXMuZWEucHVibGlzaChuZXcgQ29udGFjdFZpZXdlZCh0aGlzLmNvbnRhY3QpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('contact-list',["require", "exports", "aurelia-router", "aurelia-event-aggregator", "./web-api", "./messages", "aurelia-framework"], function (require, exports, aurelia_router_1, aurelia_event_aggregator_1, web_api_1, messages_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactList = (function () {
        function ContactList(api, ea, router) {
            var _this = this;
            this.api = api;
            this.ea = ea;
            this.router = router;
            this.selectedId = 0;
            ea.subscribe(messages_1.ContactViewed, function (msg) { return _this.select(msg.contact); });
            ea.subscribe(messages_1.ContactUpdated, function (msg) {
                console.log(msg.contact);
                var id = msg.contact.id;
                var found = _this.contacts.find(function (x) { return x.id == id; });
                Object.assign(found, msg.contact);
            });
            ea.subscribe(messages_1.ContactSaved, function (msg) {
                _this.select(msg.contact);
            });
            ea.subscribe(messages_1.ContactDelete, function (msg) {
                _this.remove(msg.contact);
            });
        }
        ContactList.prototype.created = function () {
            var _this = this;
            this.api.getContactList().then(function (contacts) { return _this.contacts = contacts; });
        };
        ContactList.prototype.select = function (contact) {
            this.selectedId = contact.id;
            return true;
        };
        ContactList.prototype.remove = function (contact) {
            var _this = this;
            var del = confirm('Are you sure you want to delete?');
            if (del) {
                this.api.deleteContact(contact)
                    .then(function (row) {
                    var found = _this.contacts.filter(function (x) { return x.id == contact.id; })[0];
                    if (found) {
                        var index = _this.contacts.indexOf(found);
                        if (index > -1) {
                            _this.contacts.splice(index, 1);
                        }
                    }
                    if (_this.contacts.length > 0) {
                        _this.selectedId = -1;
                        _this.router.navigate('/');
                    }
                });
                return true;
            }
            else {
                return false;
            }
        };
        return ContactList;
    }());
    ContactList = __decorate([
        aurelia_framework_1.inject(web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator, aurelia_router_1.Router),
        __metadata("design:paramtypes", [web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator, aurelia_router_1.Router])
    ], ContactList);
    exports.ContactList = ContactList;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyxDQUFDO29CQUNILENBQUM7b0JBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDckIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzVCLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBRUYsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDSixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQztRQUNILENBQUM7UUFDSCxrQkFBQztJQUFELENBckRBLEFBcURDLElBQUE7SUFyRFksV0FBVztRQUR2QiwwQkFBTSxDQUFDLGdCQUFNLEVBQUUsMENBQWUsRUFBRSx1QkFBTSxDQUFDO3lDQUtiLGdCQUFNLEVBQWMsMENBQWUsRUFBaUIsdUJBQU07T0FKeEUsV0FBVyxDQXFEdkI7SUFyRFksa0NBQVciLCJmaWxlIjoiY29udGFjdC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHsgV2ViQVBJIH0gZnJvbSAnLi93ZWItYXBpJztcbmltcG9ydCB7Q29udGFjdFVwZGF0ZWQsICBDb250YWN0Vmlld2VkLCBDb250YWN0U2F2ZWQsIENvbnRhY3REZWxldGV9IGZyb20gJy4vbWVzc2FnZXMnO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KFdlYkFQSSwgRXZlbnRBZ2dyZWdhdG9yLCBSb3V0ZXIpXG5leHBvcnQgY2xhc3MgQ29udGFjdExpc3Qge1xuICBjb250YWN0cztcbiAgc2VsZWN0ZWRJZCA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IFdlYkFQSSwgcHJpdmF0ZSBlYTogRXZlbnRBZ2dyZWdhdG9yLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICBlYS5zdWJzY3JpYmUoQ29udGFjdFZpZXdlZCwgbXNnID0+IHRoaXMuc2VsZWN0KG1zZy5jb250YWN0KSk7XG4gICAgZWEuc3Vic2NyaWJlKENvbnRhY3RVcGRhdGVkLCBtc2cgPT4ge1xuICAgICAgY29uc29sZS5sb2cobXNnLmNvbnRhY3QpO1xuICAgICAgbGV0IGlkID0gbXNnLmNvbnRhY3QuaWQ7XG4gICAgICBsZXQgZm91bmQgPSB0aGlzLmNvbnRhY3RzLmZpbmQoeCA9PiB4LmlkID09IGlkKTtcbiAgICAgIE9iamVjdC5hc3NpZ24oZm91bmQsIG1zZy5jb250YWN0KTtcbiAgICB9KTtcbiAgICBlYS5zdWJzY3JpYmUoQ29udGFjdFNhdmVkLCBtc2cgPT4ge1xuICAgICAgdGhpcy5zZWxlY3QobXNnLmNvbnRhY3QpO1xuICAgIH0pO1xuICAgIGVhLnN1YnNjcmliZShDb250YWN0RGVsZXRlLCBtc2cgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUobXNnLmNvbnRhY3QpO1xuICAgIH0pXG4gIH1cblxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLmFwaS5nZXRDb250YWN0TGlzdCgpLnRoZW4oY29udGFjdHMgPT4gdGhpcy5jb250YWN0cyA9IGNvbnRhY3RzKTtcbiAgfVxuXG4gIHNlbGVjdChjb250YWN0KSB7XG4gICAgdGhpcy5zZWxlY3RlZElkID0gY29udGFjdC5pZDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZShjb250YWN0KSB7XG4gICAgbGV0IGRlbCA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/Jyk7XG4gICAgaWYoZGVsKSB7XG4gICAgICB0aGlzLmFwaS5kZWxldGVDb250YWN0KGNvbnRhY3QpXG4gICAgICAudGhlbihyb3cgPT4ge1xuICAgICAgICBsZXQgZm91bmQgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguaWQgPT0gY29udGFjdC5pZClbMF07XG5cbiAgICAgICAgaWYoZm91bmQpIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNvbnRhY3RzLmluZGV4T2YoZm91bmQpO1xuICAgICAgICAgIGlmKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5jb250YWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gLTE7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoJy8nKTtcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment", "whatwg-fetch"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBSUEsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('messages',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactUpdated = (function () {
        function ContactUpdated(contact) {
            this.contact = contact;
        }
        return ContactUpdated;
    }());
    exports.ContactUpdated = ContactUpdated;
    var ContactSaved = (function () {
        function ContactSaved(contact) {
            this.contact = contact;
        }
        return ContactSaved;
    }());
    exports.ContactSaved = ContactSaved;
    var ContactDelete = (function () {
        function ContactDelete(contact) {
            this.contact = contact;
        }
        return ContactDelete;
    }());
    exports.ContactDelete = ContactDelete;
    var ContactViewed = (function () {
        function ContactViewed(contact) {
            this.contact = contact;
        }
        return ContactViewed;
    }());
    exports.ContactViewed = ContactViewed;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQ0Usd0JBQW1CLE9BQU87WUFBUCxZQUFPLEdBQVAsT0FBTyxDQUFBO1FBQUksQ0FBQztRQUNqQyxxQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksd0NBQWM7SUFJM0I7UUFDRSxzQkFBbUIsT0FBTztZQUFQLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFBSSxDQUFDO1FBQ2pDLG1CQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7SUFGWSxvQ0FBWTtJQUl6QjtRQUNFLHVCQUFtQixPQUFPO1lBQVAsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQUFJLENBQUM7UUFDakMsb0JBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLHNDQUFhO0lBSTFCO1FBQ0UsdUJBQW1CLE9BQU87WUFBUCxZQUFPLEdBQVAsT0FBTyxDQUFBO1FBQUksQ0FBQztRQUNqQyxvQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksc0NBQWEiLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29udGFjdFVwZGF0ZWQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29udGFjdCkgeyB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250YWN0U2F2ZWQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29udGFjdCkgeyB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250YWN0RGVsZXRlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnRhY3QpIHsgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29udGFjdFZpZXdlZCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb250YWN0KSB7IH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('no-selection',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NoSelection = (function () {
        function NoSelection() {
            this.message = "Please Select a Contact.";
        }
        return NoSelection;
    }());
    exports.NoSelection = NoSelection;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vLXNlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1lBQ0UsWUFBTyxHQUFHLDBCQUEwQixDQUFDO1FBQ3ZDLENBQUM7UUFBRCxrQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksa0NBQVciLCJmaWxlIjoibm8tc2VsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5vU2VsZWN0aW9uIHtcbiAgbWVzc2FnZSA9IFwiUGxlYXNlIFNlbGVjdCBhIENvbnRhY3QuXCI7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('utility',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function areEqual(obj1, obj2) {
        return Object.keys(obj1).every(function (key) { return obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]); });
    }
    exports.areEqual = areEqual;
    ;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUEsa0JBQXlCLElBQUksRUFBRSxJQUFJO1FBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXJELENBQXFELENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBRkQsNEJBRUM7SUFBQSxDQUFDIiwiZmlsZSI6InV0aWxpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXJlRXF1YWwob2JqMSwgb2JqMikge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMob2JqMSkuZXZlcnkoKGtleSkgPT4gb2JqMi5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIChvYmoxW2tleV0gPT09IG9iajJba2V5XSkpO1xufTsiXSwic291cmNlUm9vdCI6InNyYyJ9

define('web-api',["require", "exports", "aurelia-fetch-client"], function (require, exports, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var latency = 1200;
    var id = 0;
    var client = new aurelia_fetch_client_1.HttpClient();
    function getId() {
        return ++id;
    }
    var contacts = [];
    var WebAPI = (function () {
        function WebAPI() {
            this.isRequesting = false;
        }
        WebAPI.prototype.getContactList = function () {
            var _this = this;
            this.isRequesting = true;
            return client.fetch('http://localhost:3000/users')
                .then(function (response) { return response.json(); })
                .then(function (data) {
                var results = data.users.map(function (x) {
                    return {
                        id: x.rowid,
                        firstName: x.fname,
                        lastName: x.lname,
                        phoneNumber: x.phone,
                        email: x.email
                    };
                });
                _this.isRequesting = false;
                contacts = results;
                return results;
            });
        };
        WebAPI.prototype.getContactDetails = function (id) {
            var _this = this;
            this.isRequesting = true;
            return client.fetch("http://localhost:3000/users/" + id)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                var user = data.map(function (x) {
                    return {
                        id: x.rowid,
                        firstName: x.fname,
                        lastName: x.lname,
                        phoneNumber: x.phone,
                        email: x.email
                    };
                });
                _this.isRequesting = false;
                return user[0];
            });
        };
        WebAPI.prototype.saveContact = function (contact) {
            var _this = this;
            this.isRequesting = true;
            return client.fetch("http://localhost:3000/users/new", {
                method: 'put',
                headers: {
                    'Accept': 'application/json, text/plain */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contact)
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                console.log(data);
                var user = data.map(function (x) {
                    return {
                        id: x.rowid,
                        firstName: x.fname,
                        lastName: x.lname,
                        phoneNumber: x.phone,
                        email: x.email
                    };
                });
                contacts.push(user[0]);
                _this.isRequesting = false;
                return user[0];
            });
        };
        WebAPI.prototype.updateContact = function (contact) {
            var _this = this;
            this.isRequesting = true;
            return client.fetch("http://localhost:3000/users/" + contact.id, {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contact)
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                var found = contacts.filter(function (x) { return x.id == data.id; })[0];
                if (found) {
                    var index = contacts.indexOf(found);
                    contacts[index] = data;
                }
                var user = data.map(function (x) {
                    return {
                        id: x.rowid,
                        firstName: x.fname,
                        lastName: x.lname,
                        phoneNumber: x.phone,
                        email: x.email
                    };
                });
                _this.isRequesting = false;
                return user[0];
            });
        };
        WebAPI.prototype.deleteContact = function (contact) {
            var _this = this;
            this.isRequesting = true;
            return client.fetch("http://localhost:3000/users/" + contact.id, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json, text/plain */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contact)
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                var found = contacts.filter(function (x) { return x.id == data.id; })[0];
                if (found) {
                    var index = contacts.indexOf(found);
                    if (index > -1) {
                        contacts.splice(index, 1);
                    }
                }
                _this.isRequesting = false;
                return true;
            });
        };
        return WebAPI;
    }());
    exports.WebAPI = WebAPI;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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SSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO2FBQzlCLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQkFDakMsSUFBSSxDQUFDLFVBQUEsSUFBSTtnQkFDUixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVyRCxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNULElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3BDLEVBQUUsQ0FBQSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNILGFBQUM7SUFBRCxDQXRJQSxBQXNJQyxJQUFBO0lBdElZLHdCQUFNIiwiZmlsZSI6IndlYi1hcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi9JVXNlcic7XG5cbmxldCBsYXRlbmN5ID0gMTIwMDtcbmxldCBpZCA9IDA7XG5sZXQgY2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcblxuZnVuY3Rpb24gZ2V0SWQoKXtcbiAgcmV0dXJuICsraWQ7XG59XG5cbmxldCBjb250YWN0cyA9IFtdO1xuXG5leHBvcnQgY2xhc3MgV2ViQVBJIHtcbiAgaXNSZXF1ZXN0aW5nID0gZmFsc2U7XG4gIFxuICBnZXRDb250YWN0TGlzdCgpe1xuXG4gICAgdGhpcy5pc1JlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNsaWVudC5mZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHRzID0gZGF0YS51c2Vycy5tYXAoKHg6VXNlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaWQ6IHgucm93aWQsXG4gICAgICAgICAgICAgIGZpcnN0TmFtZTogeC5mbmFtZSxcbiAgICAgICAgICAgICAgbGFzdE5hbWU6IHgubG5hbWUsXG4gICAgICAgICAgICAgIHBob25lTnVtYmVyOiB4LnBob25lLFxuICAgICAgICAgICAgICBlbWFpbDogeC5lbWFpbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaXNSZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgY29udGFjdHMgPSByZXN1bHRzO1xuICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgIFxuICAgICAgfSk7XG4gIH1cblxuICBnZXRDb250YWN0RGV0YWlscyhpZCl7XG4gICAgdGhpcy5pc1JlcXVlc3RpbmcgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNsaWVudC5mZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJzLyR7aWR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBsZXQgdXNlciA9IGRhdGEubWFwKCh4OlVzZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHgucm93aWQsXG4gICAgICAgICAgICBmaXJzdE5hbWU6IHguZm5hbWUsXG4gICAgICAgICAgICBsYXN0TmFtZTogeC5sbmFtZSxcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiB4LnBob25lLFxuICAgICAgICAgICAgZW1haWw6IHguZW1haWxcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdXNlclswXTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2F2ZUNvbnRhY3QoY29udGFjdCl7XG5cbiAgICAgIHRoaXMuaXNSZXF1ZXN0aW5nID0gdHJ1ZTtcbiAgICAgIHJldHVybiBjbGllbnQuZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2Vycy9uZXdgLCB7XG4gICAgICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4gKi8qJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbnRhY3QpXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBsZXQgdXNlciA9IGRhdGEubWFwKCh4OlVzZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHgucm93aWQsXG4gICAgICAgICAgICBmaXJzdE5hbWU6IHguZm5hbWUsXG4gICAgICAgICAgICBsYXN0TmFtZTogeC5sbmFtZSxcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiB4LnBob25lLFxuICAgICAgICAgICAgZW1haWw6IHguZW1haWxcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb250YWN0cy5wdXNoKHVzZXJbMF0pO1xuXG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0aW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB1c2VyWzBdO1xuICAgICAgfSlcbiAgICB9XG5cblxuICB1cGRhdGVDb250YWN0KGNvbnRhY3Qpe1xuICAgIHRoaXMuaXNSZXF1ZXN0aW5nID0gdHJ1ZTtcbiAgICByZXR1cm4gY2xpZW50LmZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnMvJHtjb250YWN0LmlkfWAsIHtcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4gKi8qJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbnRhY3QpXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBsZXQgZm91bmQgPSBjb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGRhdGEuaWQpWzBdO1xuXG4gICAgICBpZihmb3VuZCkge1xuICAgICAgICBsZXQgaW5kZXggPSBjb250YWN0cy5pbmRleE9mKGZvdW5kKTtcbiAgICAgICAgY29udGFjdHNbaW5kZXhdID0gZGF0YTtcbiAgICAgIH1cbiAgICAgIGxldCB1c2VyID0gZGF0YS5tYXAoKHg6VXNlcikgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogeC5yb3dpZCxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogeC5mbmFtZSxcbiAgICAgICAgICAgIGxhc3ROYW1lOiB4LmxuYW1lLFxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHgucGhvbmUsXG4gICAgICAgICAgICBlbWFpbDogeC5lbWFpbFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB0aGlzLmlzUmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHVzZXJbMF07XG4gICAgfSk7IFxuICB9XG5cbiAgZGVsZXRlQ29udGFjdChjb250YWN0KXtcbiAgICB0aGlzLmlzUmVxdWVzdGluZyA9IHRydWU7XG5cbiAgICByZXR1cm4gY2xpZW50LmZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnMvJHtjb250YWN0LmlkfWAsIHtcbiAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiAqLyonLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29udGFjdClcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGxldCBmb3VuZCA9IGNvbnRhY3RzLmZpbHRlcih4ID0+IHguaWQgPT0gZGF0YS5pZClbMF07XG5cbiAgICAgIGlmKGZvdW5kKSB7XG4gICAgICAgIGxldCBpbmRleCA9IGNvbnRhY3RzLmluZGV4T2YoZm91bmQpO1xuICAgICAgICBpZihpbmRleCA+IC0xKSB7XG4gICAgICAgICAgY29udGFjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5pc1JlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources(['./elements/loading-indicator']);
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7UUFFdEQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBSEQsOEJBR0MiLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGcmFtZXdvcmtDb25maWd1cmF0aW9ufSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uKSB7XG4gIC8vY29uZmlnLmdsb2JhbFJlc291cmNlcyhbXSk7XG4gIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoWycuL2VsZW1lbnRzL2xvYWRpbmctaW5kaWNhdG9yJ10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/loading-indicator',["require", "exports", "nprogress", "aurelia-framework"], function (require, exports, nprogress, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LoadingIndicator = (function () {
        function LoadingIndicator() {
            this.loading = false;
        }
        LoadingIndicator.prototype.loadingChanged = function (newValue) {
            if (newValue) {
                nprogress.start();
            }
            else {
                nprogress.done();
            }
        };
        return LoadingIndicator;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], LoadingIndicator.prototype, "loading", void 0);
    LoadingIndicator = __decorate([
        aurelia_framework_1.noView(['nprogress/nprogress.css'])
    ], LoadingIndicator);
    exports.LoadingIndicator = LoadingIndicator;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9sb2FkaW5nLWluZGljYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxJQUFhLGdCQUFnQjtRQUQ3QjtZQUVZLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFTNUIsQ0FBQztRQVBDLHlDQUFjLEdBQWQsVUFBZSxRQUFRO1lBQ3JCLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUM7UUFDSCx1QkFBQztJQUFELENBVkEsQUFVQyxJQUFBO0lBVFc7UUFBVCw0QkFBUTs7cURBQWlCO0lBRGYsZ0JBQWdCO1FBRDVCLDBCQUFNLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO09BQ3ZCLGdCQUFnQixDQVU1QjtJQVZZLDRDQUFnQiIsImZpbGUiOiJyZXNvdXJjZXMvZWxlbWVudHMvbG9hZGluZy1pbmRpY2F0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBucHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcbmltcG9ydCB7YmluZGFibGUsIG5vVmlld30gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5Abm9WaWV3KFsnbnByb2dyZXNzL25wcm9ncmVzcy5jc3MnXSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nSW5kaWNhdG9yIHtcbiAgQGJpbmRhYmxlIGxvYWRpbmcgPSBmYWxzZTtcblxuICBsb2FkaW5nQ2hhbmdlZChuZXdWYWx1ZSkge1xuICAgIGlmKG5ld1ZhbHVlKSB7XG4gICAgICBucHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbnByb2dyZXNzLmRvbmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"./styles.css\"></require><require from=\"./contact-list\"></require><nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"navbar-header\"><a class=\"navbar-brand\"><i class=\"fa fa-user\"></i> <span>Contacts</span> </a><a click.delegate=\"addNew()\" route-href=\"route: new-contact;\" id=\"addContact\" type=\"button\" class=\"btn btn-info\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add Contact</a></div></nav><loading-indicator loading.bind=\"router.isNavigating || api.isRequesting\"></loading-indicator><div class=\"container\"><div class=\"row\"><contact-list class=\"col-md-4\"></contact-list><router-view class=\"col-md-8\"></router-view></div></div></template>"; });
define('text!styles.css', ['module'], function(module) { module.exports = "body { padding-top: 70px; }\n\nsection {\n  margin: 0 20px;\n}\n\na:focus {\n  outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.no-selection {\n  margin: 20px;\n}\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.panel {\n  margin: 20px;\n}\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white;\n}\n\n.button-bar > button {\n  float: right;\n  margin: 20px;\n}\n\nli.list-group-item {\n  list-style: none;\n}\n\nli.list-group-item > a {\n  text-decoration: none;\n}\n\nli.list-group-item.active > a {\n  color: white;\n}\n\n.navbar-header {\n  width: 100%;\n}\n\n#addContact {\n  margin: 8px;\n}\n\n.contact-item {\n  position: relative;\n  z-index: 2;\n}\n\n.delete-contact {\n  position: absolute;\n  z-index: 3;\n  top:15px;\n  right:15px;\n}\n"; });
define('text!contact-detail.html', ['module'], function(module) { module.exports = "<template><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h3 class=\"panel-title\">Profile</h3></div><div class=\"panel-body\"><form role=\"form\" class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-2 control-label\">First Name</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"first name\" class=\"form-control\" value.bind=\"contact.firstName\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Last Name</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"last name\" class=\"form-control\" value.bind=\"contact.lastName\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Email</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"email\" class=\"form-control\" value.bind=\"contact.email\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Phone Number</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"phone number\" class=\"form-control\" value.bind=\"contact.phoneNumber\"></div></div></form></div></div><div class=\"button-bar\"><button class=\"btn btn-danger pull-left\" click.delegate=\"delete()\" disabled.bind=\"!canDelete\">Delete</button> <button class=\"btn btn-success\" click.delegate=\"save()\" disabled.bind=\"!canSave\">Save</button></div></template>"; });
define('text!contact-list.html', ['module'], function(module) { module.exports = "<template><div class=\"contact-list\"><ul class=\"list-group\"><li repeat.for=\"contact of contacts\" class=\"list-group-item ${contact.id === $parent.selectedId ? 'active' : ''}\"><a route-href=\"route: contacts; params.bind: {id:contact.id}\" class=\"contact-item\" click.delegate=\"$parent.select(contact)\"><h4 class=\"list-group-item-heading\">${contact.firstName} ${contact.lastName}</h4><p class=\"list-group-item-text\">${contact.email}</p></a><a title=\"delete contact\" click.delegate=\"remove(contact)\" class=\"btn btn-danger btn-sm delete-contact\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></a></li></ul></div></template>"; });
define('text!no-selection.html', ['module'], function(module) { module.exports = "<template><div class=\"no-selection text-center\"><h2>${message}</h2></div></template>"; });
//# sourceMappingURL=app-bundle.js.map