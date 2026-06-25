var pForm = nexacro.Form.prototype;

pForm.CONST_ASC_MARK = "▲";
pForm.CONST_DESC_MARK = "▼";

// 그리드 정렬
pForm.gfn_gridSort = function (obj, e) {
    alert("gfn_gridSort");
};

//
pForm.gfn_setGrid = function (objGrid) {
    objGrid.addEventHandler("onheadclick", this.gfn_gridSort, this);
};
