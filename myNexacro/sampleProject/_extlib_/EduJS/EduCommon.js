var pForm = nexacro.Form.prototype;

pForm.gfn_formOnload = function (objForm) {
    const arrComp = objForm.components;
    const nLength = arrComp.length;

    for (let i = 0; i < nLength; i += 1) {
        if (arrComp[i] instanceof nexacro.Grid) {
            this.gfn_setGrid(arrComp[i]);
        }
    }
};
