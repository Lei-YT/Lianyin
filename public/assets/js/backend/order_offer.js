define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'order_offer/index' + location.search,
                    add_url: 'order_offer/add',
                    edit_url: 'order_offer/edit',
                    del_url: 'order_offer/del',
                    multi_url: 'order_offer/multi',
                    import_url: 'order_offer/import',
                    table: 'order_offer',
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
                        {field: 'offer_type', title: __('Offer_type')},
                        {field: 'order_id', title: __('Order_id')},
                        {field: 'offer_user_id', title: __('Offer_user_id')},
                        {field: 'print_money', title: __('Print_money'), operate:'BETWEEN'},
                        {field: 'order.id', title: __('Order.id')},
                        {field: 'order.order_type', title: __('Order.order_type')},
                        {field: 'order.order_no', title: __('Order.order_no'), operate: 'LIKE'},
                        {field: 'order.order_title', title: __('Order.order_title'), operate: 'LIKE'},
                        {field: 'order.design_status', title: __('Order.design_status')},
                        {field: 'order.print_status', title: __('Order.print_status')},
                        {field: 'order.pay_way', title: __('Order.pay_way'), operate: 'LIKE'},
                        {field: 'order.total_money', title: __('Order.total_money'), operate:'BETWEEN'},
                        {field: 'order.user_money', title: __('Order.user_money'), operate:'BETWEEN'},
                        {field: 'order.user_id', title: __('Order.user_id')},
                        {field: 'order.design_mode', title: __('Order.design_mode')},
                        {field: 'order.design_mode_id', title: __('Order.design_mode_id')},
                        {field: 'order.design_budget_money', title: __('Order.design_budget_money'), operate:'BETWEEN'},
                        {field: 'order.design_type_id', title: __('Order.design_type_id')},
                        {field: 'order.design_type_text', title: __('Order.design_type_text'), operate: 'LIKE'},
                        {field: 'order.design_day', title: __('Order.design_day')},
                        {field: 'order.design_size_weight', title: __('Order.design_size_weight')},
                        {field: 'order.design_size_height', title: __('Order.design_size_height')},
                        {field: 'order.design_file', title: __('Order.design_file'), operate: false},
                        {field: 'order.design_desc', title: __('Order.design_desc'), operate: 'LIKE'},
                        {field: 'order.print_mode', title: __('Order.print_mode')},
                        {field: 'order.print_mode_id', title: __('Order.print_mode_id')},
                        {field: 'order.print_day', title: __('Order.print_day')},
                        {field: 'order.print_type_id', title: __('Order.print_type_id')},
                        {field: 'order.print_type_text', title: __('Order.print_type_text'), operate: 'LIKE'},
                        {field: 'order.print_material_text', title: __('Order.print_material_text'), operate: 'LIKE'},
                        {field: 'order.print_size_text', title: __('Order.print_size_text'), operate: 'LIKE'},
                        {field: 'order.print_count_text', title: __('Order.print_count_text'), operate: 'LIKE'},
                        {field: 'order.print_desc', title: __('Order.print_desc'), operate: 'LIKE'},
                        {field: 'order.address_province', title: __('Order.address_province'), operate: 'LIKE'},
                        {field: 'order.address_city', title: __('Order.address_city'), operate: 'LIKE'},
                        {field: 'order.address_area', title: __('Order.address_area'), operate: 'LIKE'},
                        {field: 'order.address_detail', title: __('Order.address_detail'), operate: 'LIKE'},
                        {field: 'order.address_name', title: __('Order.address_name'), operate: 'LIKE'},
                        {field: 'order.address_phone', title: __('Order.address_phone'), operate: 'LIKE'},
                        {field: 'order.createtime', title: __('Order.createtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'order.updatetime', title: __('Order.updatetime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
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