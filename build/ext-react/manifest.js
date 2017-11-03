Ext.require(["Ext.app.Application", "Ext.Component", "Ext.Widget"]);
Ext.require("Ext.reactor.RendererCell");
Ext.create({
  xtype: 'container',
  padding: "20"
});
Ext.create({"xtype":"container"});
Ext.require('Ext.plugin.Responsive');
Ext.create('Ext.data.Store', {
  fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
  data: data
});
Ext.create({
  xtype: 'grid',
  store: this.store
});
Ext.create({
  xtype: 'toolbar',
  docked: "top"
});
Ext.create({
  xtype: 'searchfield',
  ui: "faded",
  ref: function (field) {
    return _this.query = field;
  },
  placeholder: "Search...",
  onChange: this.onSearch.bind(this),
  responsiveConfig: (_a = {}, _a[small] = {
    flex: 1
  }, _a[medium] = {
    flex: undefined
  }, _a)
});
Ext.create({
  xtype: 'column',
  text: "Name",
  dataIndex: "name",
  flex: 2,
  resizable: true
});
Ext.create({
  xtype: 'column',
  text: "Email",
  dataIndex: "email",
  flex: 3,
  resizable: true,
  responsiveConfig: (_b = {}, _b[small] = {
    hidden: true
  }, _b[medium] = {
    hidden: false
  }, _b)
});
Ext.create({
  xtype: 'column',
  text: "Phone",
  dataIndex: "phone",
  flex: 2,
  resizable: true
});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"searchfield"});
Ext.create({
  xtype: 'container',
  fullscreen: true,
  layout: "fit"
});
Ext.create({
  xtype: 'titlebar',
  title: "extjs-react",
  docked: "top"
});
Ext.create({
  xtype: 'button',
  align: "left",
  iconCls: "x-fa fa-bars",
  handler: this.toggleAppMenu,
  ripple: false
});
Ext.create({
  xtype: 'sheet',
  displayed: showAppMenu,
  side: "left",
  onHide: this.onHideAppMenu
});
Ext.create({
  xtype: 'panel',
  scrollable: true,
  title: "ExtReact Boilerplate"
});
Ext.create({
  xtype: 'panel',
  scrollable: true,
  docked: "left",
  shadow: true,
  zIndex: 2
});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"titlebar"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"sheet"});
Ext.create({"xtype":"panel"});
Ext.require('Ext.data.TreeStore');
Ext.create({"xtype":"treelist"});
Ext.create({"xtype":"treelist"})