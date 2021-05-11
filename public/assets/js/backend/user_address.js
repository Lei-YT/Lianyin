define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'user_address/index' + location.search,
                    add_url: 'user_address/add',
                    edit_url: 'user_address/edit',
                    del_url: 'user_address/del',
                    multi_url: 'user_address/multi',
                    import_url: 'user_address/import',
                    table: 'user_address',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'user_id', title: __('User_id')},
                        {field: 'name', title: __('Name'), operate: 'LIKE'},
                        {field: 'phone', title: __('Phone'), operate: 'LIKE'},
                        {field: 'province', title: __('Province'), operate: 'LIKE'},
                        {field: 'province_id', title: __('Province_id')},
                        {field: 'city', title: __('City'), operate: 'LIKE'},
                        {field: 'city_id', title: __('City_id')},
                        {field: 'area', title: __('Area'), operate: 'LIKE'},
                        {field: 'area_id', title: __('Area_id')},
                        {field: 'address', title: __('Address'), operate: 'LIKE'},
                        {field: 'is_default', title: __('Is_default')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'area.id', title: __('Area.id')},
                        {field: 'area.pid', title: __('Area.pid')},
                        {field: 'area.shortname', title: __('Area.shortname'), operate: 'LIKE'},
                        {field: 'area.name', title: __('Area.name'), operate: 'LIKE'},
                        {field: 'area.mergename', title: __('Area.mergename'), operate: 'LIKE'},
                        {field: 'area.level', title: __('Area.level')},
                        {field: 'area.pinyin', title: __('Area.pinyin'), operate: 'LIKE'},
                        {field: 'area.code', title: __('Area.code'), operate: 'LIKE'},
                        {field: 'area.zip', title: __('Area.zip'), operate: 'LIKE'},
                        {field: 'area.first', title: __('Area.first'), operate: 'LIKE'},
                        {field: 'area.lng', title: __('Area.lng'), operate: 'LIKE'},
                        {field: 'area.lat', title: __('Area.lat'), operate: 'LIKE'},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});