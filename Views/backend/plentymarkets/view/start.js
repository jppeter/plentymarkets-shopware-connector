// {namespace name=backend/Plentymarkets/view}
// {block name=backend/Plentymarkets/view/Start}

/**
 * The settings view builds the graphical elements and loads all saved settings
 * data. It shows for example the chosen warhouse, the producer or the order
 * status. The settings are differentiated into four groups: "Import
 * Artikelstammdaten", "Export Aufträge", "Warenausgang", "Zahlungseingang bei
 * plentymarkets". It is extended by the Ext form panel "Ext.form.Panel".
 * 
 * @author Daniel Bächtle <daniel.baechtle@plentymarkets.com>
 */
Ext.define('Shopware.apps.Plentymarkets.view.Start', {

	extend: 'Ext.form.Panel',

	alias: 'widget.plentymarkets-view-start',

	title: '{s name=plentymarkets/view/start/title}Start{/s}',

	autoScroll: true,

	cls: 'shopware-form',

	layout: 'anchor',

	border: false,

	isBuilt: false,

	defaults: {
		anchor: '100%',
		margin: 10,
		labelWidth: '33%'
	},

	initComponent: function()
	{
		var me = this;

		me.dockedItems = [{
			xtype: 'toolbar',
			cls: 'shopware-toolbar',
			dock: 'bottom',
			ui: 'shopware-ui',
			items: ['->', {
				xtype: 'button',
				cls: 'secondary',
				text: 'Status prüfen',
				handler: function()
				{
					me.fireEvent('check', me);
				}
			}, {
				xtype: 'button',
				cls: 'primary',
				iconCls: 'plenty-icon-external',
				text: 'plentymarkets Administration öffnen',
				handler: function()
				{
					window.open(me.settings.get('ApiWsdl') + '/plenty/ui/admin.html');
				}
			}]
		}];

		me.registerEvents();
		me.callParent(arguments);
	},

	init: function()
	{
		var me = this;
		if (me.isBuilt)
		{
			me.fireEvent('check', me)
		}
		else
		{
			me.build();
		}
	},

	/**
	 * Registers additional component events.
	 */
	registerEvents: function()
	{
		this.addEvents('save', 'check');
	},

	build: function()
	{
		var me = this;
		me.add([

		{
			xtype: 'fieldset',
			title: 'API',
			defaults: {
				anchor: '100%',
				labelWidth: '33%'
			},
			items: [{
				xtype: 'displayfield',
				fieldLabel: '{s name=plentymarkets/view/settings/textfield/ApiConnectionStatus}Verbindung{/s}',
				name: 'ApiStatus',
				renderer: function(value)
				{
					if (value == 2)
					{
						return Ext.String.format('<div class="plenty-status plenty-status-ok"> geprüft am ' + Ext.util.Format.date(me.settings.get('ApiLastStatusTimestamp'), 'd.m.Y, H:i:s') + ' Uhr</div>');
					}
					else if (value == 1)
					{
						return Ext.String.format('<div class="plenty-status plenty-status-error"> geprüft am ' + Ext.util.Format.date(me.settings.get('ApiLastStatusTimestamp'), 'd.m.Y, H:i:s') + ' Uhr</div>');
					}
				}
			}, {
				xtype: 'displayfield',
				fieldLabel: '{s name=plentymarkets/view/settings/textfield/ApiTimestampDeviation}Abweichung{/s}',
				name: 'ApiTimestampDeviation',
				helpText: 'Zeitliche Differenz in Sekunden zu plentymarkets',
				renderer: function(deviation)
				{
					if (me.settings.get('ApiStatus') != 2)
					{
						return Ext.String.format('<div class="plenty-status plenty-status-error"> keine Informationen</div>');
					}
					else if (deviation == 0)
					{
						return Ext.String.format('<div class="plenty-status plenty-status-ok"> keine Abweichung</div>');
					}
					else if (deviation > 0 && deviation < 15)
					{
						return Ext.String.format('<div class="plenty-status plenty-status-api-deviation-ahead"> ' + deviation + ' Sekunde(n)</div>');
					}
					else if (deviation < 0 && deviation > -15)
					{
						return Ext.String.format('<div class="plenty-status plenty-status-api-deviation-behind"> ' + Math.abs(deviation) + ' Sekunde(n)</div>');
					}
					else
					{
						return Ext.String.format('<div class="plenty-status plenty-status-warning"> ' + Math.abs(deviation) + ' Sekunde(n)</div>');
					}
				}
			}]
		}, {
			xtype: 'fieldset',
			title: 'Umgebung',
			collapsed: true,
			collapsible: true,
			defaults: {
				anchor: '100%',
				labelWidth: '33%',
				xtype: 'displayfield',
				renderer: function(value)
				{
					return value || Ext.String.format('<div class="plenty-export-status plenty-export-status-open">&nbsp;</div>');
				}
			},
			items: [{
				fieldLabel: '{s name=plentymarkets/view/settings/textfield/_WebserverSoftware}Webserver Software{/s}',
				name: '_WebserverSoftware'
			}, {
				fieldLabel: '{s name=plentymarkets/view/settings/textfield/_WebserverSignature}Webserver Signature{/s}',
				name: '_WebserverSignature'
			}, {
				fieldLabel: '{s name=plentymarkets/view/settings/textfield/_ApacheModules}Apache Modules{/s}',
				name: '_ApacheModules'
			}, {
				fieldLabel: '{s name=plentymarkets/view/settings/textfield/_PhpVersion}PHP Version{/s}',
				name: '_PhpVersion'
			}, {
				fieldLabel: '{s name=plentymarkets/view/settings/textfield/_PhpInterface}PHP Interface{/s}',
				name: '_PhpInterface'
			}, {
				fieldLabel: '{s name=plentymarkets/view/settings/textfield/_PhpMemoryLimit}PHP Memory Limit{/s}',
				name: '_PhpMemoryLimit'
			}

			]
		}, {
			xtype: 'fieldset',
			title: 'Versionen',
			collapsed: true,
			collapsible: true,
			defaults: {
				anchor: '100%',
				labelWidth: '33%',
				xtype: 'displayfield',
				renderer: function(value)
				{
					return value || Ext.String.format('<div class="plenty-export-status plenty-export-status-open">&nbsp;</div>');
				}
			},

			items: [{
				fieldLabel: '{s name=plentymarkets/view/settings/textfield/PlentyVersion149}plentymarkets{/s}',
				name: 'PlentymarketsVersion'
			}, {
				fieldLabel: '{s name=plentymarkets/view/settings/textfield/PlentyApiVersion149}SOAP API{/s}',
				value: '112'
			}, {
				fieldLabel: '{s name=plentymarkets/view/settings/textfield/ConnectorVersion149}Connector{/s}',
				name: 'ConnectorVersion'
			}]
		}, {
			xtype: 'fieldset',
			title: 'Datenaustausch',
			defaults: {
				anchor: '100%',
				labelWidth: '33%'
			},
			items: [{
				xtype: 'fieldcontainer',
				fieldLabel: '{s name=plentymarkets/view/settings/textfield/SettingsStatus}Einstellungen{/s}',
				layout: 'hbox',
				items: [{
					xtype: 'displayfield',
					name: 'IsSettingsFinished',
					renderer: function(value)
					{
						if (value == "true")
						{
							return Ext.String.format('<div class="plenty-status plenty-status-ok">&nbsp;</div>');
						}
						else
						{
							return Ext.String.format('<div class="plenty-status plenty-status-error">&nbsp;</div>');
						}
					}
				}, {
					xtype: 'button',
					text: 'Details öffnen',
					cls: 'secondary small',
					handler: function()
					{
						me.main.tabpanel.setActiveTab(2);
					}

				}]
			}, {
				xtype: 'fieldcontainer',
				fieldLabel: '{s name=plentymarkets/view/settings/textfield/MappingStatus}Mapping Status{/s}',
				layout: 'hbox',
				items: [{
					xtype: 'displayfield',
					labelWidth: 300,
					name: 'IsMappingFinished',
					renderer: function(value)
					{
						if (value == "true")
						{
							return Ext.String.format('<div class="plenty-status plenty-status-ok">&nbsp;</div>');
						}
						else
						{
							return Ext.String.format('<div class="plenty-status plenty-status-error">&nbsp;</div>');
						}
					}
				}, {
					xtype: 'button',
					text: 'Details öffnen',
					cls: 'secondary small',
					handler: function()
					{
						me.main.tabpanel.setActiveTab(3);
					}
				}]
			}, {
				xtype: 'fieldcontainer',
				fieldLabel: '{s name=plentymarkets/view/settings/textfield/DataIntegrityStatus}Datenintegrität{/s}',
				layout: 'hbox',
				items: [{
					xtype: 'displayfield',
					name: 'IsDataIntegrityValid',
					renderer: function(value)
					{
						if (value == "true")
						{
							return Ext.String.format('<div class="plenty-status plenty-status-ok">&nbsp;</div>');
						}
						else
						{
							return Ext.String.format('<div class="plenty-status plenty-status-error">&nbsp;</div>');
						}
					}
				},{
					xtype: 'button',
					text: 'Details öffnen',
					cls: 'secondary small',
					handler: function()
					{
						me.main.tabpanel.setActiveTab(4);
					}
				}]
			}, {
				xtype: 'fieldcontainer',
				fieldLabel: '{s name=plentymarkets/view/settings/textfield/InitialExportStatus}Datenexport zu plentymarkets{/s}',
				layout: 'hbox',
				items: [{
					xtype: 'displayfield',
					name: 'IsExportFinished',
					renderer: function(value)
					{
						if (value == "true")
						{
							return Ext.String.format('<div class="plenty-status plenty-status-ok">&nbsp;</div>');
						}
						else
						{
							return Ext.String.format('<div class="plenty-status plenty-status-error">&nbsp;</div>');
						}
					}
				}, {
					xtype: 'button',
					text: 'Details öffnen',
					cls: 'secondary small',
					handler: function()
					{
						me.main.tabpanel.setActiveTab(5);
					}

				}]
			}, {
				fieldLabel: '{s name=plentymarkets/view/settings/textfield/MayDatexUser}Datenaustausch mit plentymarkets{/s}',
				allowBlank: true,
				xtype: 'checkbox',
				boxLabel: 'aktivieren',
				name: 'MayDatexUser',
				id: 'MayDatexUser',
				checked: me.settings.get('MayDatexUser'),
				disabled: !me.settings.get('MayDatex'),
				inputValue: true,
				uncheckedValue: false,
				listeners: {
					change: function()
					{
						me.fireEvent('save', me);
					}
				}
			}]
		}]);

		//
		me.loadRecord(me.settings);
		me.isBuilt = true;

	}

});
// {/block}
