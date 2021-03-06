<?php

/**
 * plentymarkets shopware connector
 * Copyright © 2013-2015 plentymarkets GmbH
 *
 * According to our dual licensing model, this program can be used either
 * under the terms of the GNU Affero General Public License, version 3,
 * or under a proprietary license.
 *
 * The texts of the GNU Affero General Public License, supplemented by an additional
 * permission, and of our proprietary license can be found
 * in the LICENSE file you have received along with this program.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * "plentymarkets" is a registered trademark of plentymarkets GmbH.
 * "shopware" is a registered trademark of shopware AG.
 * The licensing of the program under the AGPLv3 does not imply a
 * trademark license. Therefore any rights, titles and interests in the
 * above trademarks remain entirely with the trademark owners.
 *
 * @copyright  Copyright (c) 2013-2015, plentymarkets GmbH (http://www.plentymarkets.com)
 * @author     Daniel Bächtle <daniel.baechtle@plentymarkets.com>
 */

/**
 * I am a generated class and am required for communicating with plentymarkets.
 */
class PlentySoapObject_ItemBase
{
	
	/**
	 * @var ArrayOfPlentysoapobject_itemattributevalueset
	 */
	public $AttributeValueSets;
	
	/**
	 * @var PlentySoapObject_ItemAvailability
	 */
	public $Availability;
	
	/**
	 * @var string
	 */
	public $BundleType;
	
	/**
	 * @var ArrayOfPlentysoapobject_itemcategory
	 */
	public $Categories;
	
	/**
	 * @var int
	 */
	public $Condition;
	
	/**
	 * @var string
	 */
	public $CustomsTariffNumber;
	
	/**
	 * @var string
	 */
	public $DeepLink;
	
	/**
	 * @var string
	 */
	public $EAN1;
	
	/**
	 * @var string
	 */
	public $EAN2;
	
	/**
	 * @var string
	 */
	public $EAN3;
	
	/**
	 * @var string
	 */
	public $EAN4;
	
	/**
	 * @var string
	 */
	public $ExternalItemID;
	
	/**
	 * @var int
	 */
	public $FSK;
	
	/**
	 * @var PlentySoapObject_ItemFreeTextFields
	 */
	public $FreeTextFields;
	
	/**
	 * @var int
	 */
	public $HasAttributes;
	
	/**
	 * @var string
	 */
	public $ISBN;
	
	/**
	 * @var int
	 */
	public $Inserted;
	
	/**
	 * @var ArrayOfPlentysoapobject_itemattributemarkup
	 */
	public $ItemAttributeMarkup;
	
	/**
	 * @var int
	 */
	public $ItemID;
	
	/**
	 * @var string
	 */
	public $ItemNo;
	
	/**
	 * @var ArrayOfPlentysoapobject_itemproperty
	 */
	public $ItemProperties;
	
	/**
	 * @var ArrayOfPlentysoapobject_itemsupplier
	 */
	public $ItemSuppliers;
	
	/**
	 * @var string
	 */
	public $ItemURL;
	
	/**
	 * @var int
	 */
	public $LastUpdate;
	
	/**
	 * @var int
	 */
	public $Marking1ID;
	
	/**
	 * @var int
	 */
	public $Marking2ID;
	
	/**
	 * @var string
	 */
	public $Model;
	
	/**
	 * @var PlentySoapObject_ItemOthers
	 */
	public $Others;
	
	/**
	 * @var ArrayOfPlentysoapobject_integer
	 */
	public $ParcelServicePresetIDs;
	
	/**
	 * @var string
	 */
	public $Position;
	
	/**
	 * @var PlentySoapObject_ItemPriceSet
	 */
	public $PriceSet;
	
	/**
	 * @var int
	 */
	public $ProducerID;
	
	/**
	 * @var string
	 */
	public $ProducerName;
	
	/**
	 * @var int
	 */
	public $ProducingCountryID;
	
	/**
	 * @var int
	 */
	public $Published;
	
	/**
	 * @var PlentySoapObject_ItemStock
	 */
	public $Stock;
	
	/**
	 * @var int
	 */
	public $StorageLocation;
	
	/**
	 * @var PlentySoapObject_ItemTexts
	 */
	public $Texts;
	
	/**
	 * @var int
	 */
	public $Type;
	
	/**
	 * @var int
	 */
	public $VATInternalID;
	
	/**
	 * @var string
	 */
	public $WebShopSpecial;
}
