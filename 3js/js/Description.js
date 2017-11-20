/**
 * Created by kk4sbb on 2017/11/17.
 */

function showDesc(){
    var str_name = "橡树";
    var str_kingdom = "植物界";
    var str_phylum = "种子植物门";
    var str_class = "木兰纲";
    var str_order = "壳斗目";
    var str_family = "壳斗科";
    var str_genus = "栎属";


    var namecard = document.createElement( 'div' );
    namecard.id = "namecard";
    var table = document.createElement('table');
    table.id = "plantInfoTable";


    var thead = "<h2>"+str_name+"</h2>";
    table.appendChild(createOneRowOneColumn(thead, str_name));
    table.appendChild(createRow(createAttr("界：", str_kingdom),
                                createAttr("门：", str_phylum)));
    table.appendChild(createRow(createAttr("纲：", str_class),
                                createAttr("目：", str_order)));
    table.appendChild(createRow(createAttr("科：", str_family),
                                createAttr("属：", str_genus)));
    table.appendChild(createDesc("落叶或常绿乔木，高达25至30米甚至以上。树皮暗灰褐色，略平滑。小枝褐色，无毛。" +
        "冬芽长卵形，长 3—5毫米，无毛，芽鳞暗褐色，多数，覆瓦状排列。"))
    namecard.appendChild(table);

    document.body.appendChild( namecard );
}

function createOneRowOneColumn(str, colSpan) {
    var td = document.createElement("td");
    td.innerHTML = str;
    td.colSpan = colSpan;
    return document.createElement("tr").appendChild(td)
}

function createOneRowTwoColumn(strLeft, strRight){
    var td_left = document.createElement("td");
    td_left.innerHTML = strLeft;
    td_left.className = "leftTd";
    var td_right = document.createElement("td");
    td_right.innerHTML = strRight;
    td_right.className = "rightTd";
    var tr_order = document.createElement("tr");
    tr_order.appendChild(td_left);
    tr_order.appendChild(td_right);
    return tr_order;
}

function createDesc( text ) {
    var desc = document.createElement("td");
    desc.innerHTML = text;
    desc.colSpan = 2;
    var row = document.createElement("tr");
    row.appendChild(desc);
    return row;
}

function createRow( td_left, td_right ) {
    var row = document.createElement("tr");
    row.appendChild(td_left);
    row.appendChild(td_right);
    return row;
}

function createAttr( key, value ) {
    var td = document.createElement("td");
    var span_key = document.createElement("span");
    span_key.className = "attr_key";
    span_key.innerHTML = key;
    var span_value = document.createElement("span");
    span_value.innerHTML = value;
    td.appendChild(span_key);
    td.appendChild(span_value);
    return td;
}