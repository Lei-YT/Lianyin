define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'order/index' + location.search,
                    add_url: 'order/add',
                    edit_url: 'order/edit',
                    del_url: 'order/del',
                    multi_url: 'order/multi',
                    import_url: 'order/import',
                    table: 'order',
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
                        {field: 'order_type', title: __('Order_type')},
                        {field: 'order_no', title: __('Order_no'), operate: 'LIKE'},
                        {field: 'order_title', title: __('Order_title'), operate: 'LIKE'},
                        {field: 'design_status', title: __('Design_status')},
                        {field: 'print_status', title: __('Print_status')},
                        {field: 'pay_way', title: __('Pay_way'), operate: 'LIKE'},
                        {field: 'total_money', title: __('Total_money'), operate:'BETWEEN'},
                        {field: 'user_money', title: __('User_money'), operate:'BETWEEN'},
                        {field: 'user_id', title: __('User_id')},
                        {field: 'design_mode', title: __('Design_mode')},
                        {field: 'design_mode_id', title: __('Design_mode_id')},
                        {field: 'design_budget_money', title: __('Design_budget_money'), operate:'BETWEEN'},
                        {field: 'design_type_id', title: __('Design_type_id')},
                        {field: 'design_type_text', title: __('Design_type_text'), operate: 'LIKE'},
                        {field: 'design_day', title: __('Design_day')},
                        {field: 'design_size_weight', title: __('Design_size_weight')},
                        {field: 'design_size_height', title: __('Design_size_height')},
                        {field: 'design_file', title: __('Design_file'), operate: false},
                        {field: 'design_desc', title: __('Design_desc'), operate: 'LIKE'},
                        {field: 'print_mode', title: __('Print_mode')},
                        {field: 'print_mode_id', title: __('Print_mode_id')},
                        {field: 'print_day', title: __('Print_day')},
                        {field: 'print_type_id', title: __('Print_type_id')},
                        {field: 'print_type_text', title: __('Print_type_text'), operate: 'LIKE'},
                        {field: 'print_material_text', title: __('Print_material_text'), operate: 'LIKE'},
                        {field: 'print_size_text', title: __('Print_size_text'), operate: 'LIKE'},
                        {field: 'print_count_text', title: __('Print_count_text'), operate: 'LIKE'},
                        {field: 'print_desc', title: __('Print_desc'), operate: 'LIKE'},
                        {field: 'address_province', title: __('Address_province'), operate: 'LIKE'},
                        {field: 'address_city', title: __('Address_city'), operate: 'LIKE'},
                        {field: 'address_area', title: __('Address_area'), operate: 'LIKE'},
                        {field: 'address_detail', title: __('Address_detail'), operate: 'LIKE'},
                        {field: 'address_name', title: __('Address_name'), operate: 'LIKE'},
                        {field: 'address_phone', title: __('Address_phone'), operate: 'LIKE'},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'user.id', title: __('User.id')},
                        {field: 'user.is_design', title: __('User.is_design')},
                        {field: 'user.is_print', title: __('User.is_print')},
                        {field: 'user.group_id', title: __('User.group_id')},
                        {field: 'user.username', title: __('User.username'), operate: 'LIKE'},
                        {field: 'user.nickname', title: __('User.nickname'), operate: 'LIKE'},
                        {field: 'user.password', title: __('User.password'), operate: 'LIKE'},
                        {field: 'user.salt', title: __('User.salt'), operate: 'LIKE'},
                        {field: 'user.email', title: __('User.email'), operate: 'LIKE'},
                        {field: 'user.mobile', title: __('User.mobile'), operate: 'LIKE'},
                        {field: 'user.avatar', title: __('User.avatar'), operate: 'LIKE', events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'user.level', title: __('User.level')},
                        {field: 'user.gender', title: __('User.gender')},
                        {field: 'user.birthday', title: __('User.birthday'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'user.bio', title: __('User.bio'), operate: 'LIKE'},
                        {field: 'user.money', title: __('User.money'), operate:'BETWEEN'},
                        {field: 'user.score', title: __('User.score')},
                        {field: 'user.successions', title: __('User.successions')},
                        {field: 'user.maxsuccessions', title: __('User.maxsuccessions')},
                        {field: 'user.prevtime', title: __('User.prevtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'user.logintime', title: __('User.logintime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'user.loginip', title: __('User.loginip'), operate: 'LIKE'},
                        {field: 'user.loginfailure', title: __('User.loginfailure')},
                        {field: 'user.joinip', title: __('User.joinip'), operate: 'LIKE'},
                        {field: 'user.jointime', title: __('User.jointime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'user.createtime', title: __('User.createtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'user.updatetime', title: __('User.updatetime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'user.token', title: __('User.token'), operate: 'LIKE'},
                        {field: 'user.status', title: __('User.status'), operate: 'LIKE', formatter: Table.api.formatter.status},
                        {field: 'user.is_delete', title: __('User.is_delete')},
                        {field: 'user.verification', title: __('User.verification'), operate: 'LIKE'},
                        {field: 'user.is_certification', title: __('User.is_certification')},
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