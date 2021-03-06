(function (window, factory) {
    window.gicUIUtils = factory();
}(window, (function() {
        var utils = {}

        utils.convertToGicUIRequest = function (obj) {

            var domainId;

            var urlParams = new URLSearchParams(window.location.search);

            if (urlParams.has("domainId")) {
                domainId = urlParams.get("domainId");
            }

            if (urlParams.has("domainid")) {
                domainId = urlParams.get("domainid");
            }

            if (urlParams.has("DomainId")) {
                domainId = urlParams.get("DomainId");
            }
            
            var gicRequest = {
                DomainId: domainId,
                CallArguments: obj
            };
            var request = JSON.stringify(gicRequest);

            return request;
        }

        utils.parseGicUIResponse = function (obj) {
            if (obj != null) {
                var responseObject = JSON.parse(obj);

                return responseObject;
            }

            return null;
        }

        return utils;
    }
)));