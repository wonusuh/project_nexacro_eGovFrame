(function () {
    return function () {
        if (!this._is_form) return;

        var obj = null;

        this.on_create = function () {
            this.set_name("Form_Postcode");
            this.set_titletext("New Form");
            if (Form == this.constructor) {
                this._setFormPosition(750, 500);
            }

            // Object(Dataset, ExcelExportObject) Initialize

            // UI Components Initialize
            obj = new Static(
                "Static00",
                "10",
                "10",
                "70",
                "30",
                null,
                null,
                null,
                null,
                null,
                null,
                this
            );
            obj.set_taborder("0");
            obj.set_text("우편번호");
            this.addChild(obj.name, obj);

            obj = new Static(
                "Static00_00",
                "10",
                "46",
                "70",
                "30",
                null,
                null,
                null,
                null,
                null,
                null,
                this
            );
            obj.set_taborder("1");
            obj.set_text("주소");
            this.addChild(obj.name, obj);

            obj = new Static(
                "Static00_01",
                "10",
                "82",
                "70",
                "30",
                null,
                null,
                null,
                null,
                null,
                null,
                this
            );
            obj.set_taborder("2");
            obj.set_text("상세주소");
            this.addChild(obj.name, obj);

            obj = new Static(
                "Static00_02",
                "10",
                "118",
                "70",
                "30",
                null,
                null,
                null,
                null,
                null,
                null,
                this
            );
            obj.set_taborder("3");
            obj.set_text("참고항목");
            this.addChild(obj.name, obj);

            obj = new Edit(
                "edt_post",
                "70",
                "10",
                "120",
                "30",
                null,
                null,
                null,
                null,
                null,
                null,
                this
            );
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button(
                "btn_post",
                "200",
                "10",
                "100",
                "30",
                null,
                null,
                null,
                null,
                null,
                null,
                this
            );
            obj.set_taborder("5");
            obj.set_text("우편번호 찾기");
            this.addChild(obj.name, obj);

            obj = new Edit(
                "edt_addr1",
                "70",
                "46",
                "416",
                "30",
                null,
                null,
                null,
                null,
                null,
                null,
                this
            );
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit(
                "edt_addr2",
                "70",
                "82",
                "416",
                "30",
                null,
                null,
                null,
                null,
                null,
                null,
                this
            );
            obj.set_taborder("8");
            obj.getSetter("onclick").set("Common_onclick");
            this.addChild(obj.name, obj);

            obj = new Edit(
                "edt_desc",
                "70",
                "118",
                "416",
                "30",
                null,
                null,
                null,
                null,
                null,
                null,
                this
            );
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new WebView(
                "WebView00",
                "186",
                "167",
                "190",
                "72",
                null,
                null,
                null,
                null,
                null,
                null,
                this
            );
            obj.set_taborder("9");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default", "", 750, 500, this, function (
                p
            ) {});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            // BindItem Information

            // TriggerItem Information
        };

        this.loadPreloadList = function () {};

        // User Script
        this.registerScript("Form_Postcode.xfdl", function () {
            // init 함수
            this.Form_Postcode_onload = function (obj, e) {
                this.WebView00.url =
                    "http://localhost:8080/edu-egov/SearchPost.html";
            };

            // 우편번호 찾기
            this.btn_post_onclick = function (obj, e) {
                let param = this.edt_addr1.value;
                if (typeof param === "undefined" || !param) param = "";
                this.WebView00.callScript(
                    `sample6_execDaumPostcode('${param}')`
                );
            };

            this.WebView00_onusernotify = function (obj, e) {
                const arrAddr = e.userdata.split("||");
                this.edt_post.value = arrAddr[0];
                this.edt_addr1.value = arrAddr[1];
                this.edt_desc.value = arrAddr[2];
                this.edt_addr2.setFocus();
            };
        });

        // Regist UI Components Event
        this.on_initEvent = function () {
            this.addEventHandler(
                "onload",
                this.Form_Postcode_onload,
                this
            );
            this.Static00_01.addEventHandler(
                "onclick",
                this.Common_onclick,
                this
            );
            this.btn_post.addEventHandler(
                "onclick",
                this.btn_post_onclick,
                this
            );
            this.WebView00.addEventHandler(
                "onusernotify",
                this.WebView00_onusernotify,
                this
            );
        };
        this.loadIncludeScript("Form_Postcode.xfdl");
        this.loadPreloadList();

        // Remove Reference
        obj = null;
    };
})();
