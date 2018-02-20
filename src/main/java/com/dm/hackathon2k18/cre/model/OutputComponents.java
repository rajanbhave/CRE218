package com.dm.hackathon2k18.cre.model;

import java.util.Map;

/**
 * TODO Put here a description of what this class does.
 *
 * @author Rajan.Bhave. Created Feb 18, 2018.
 */
public class OutputComponents {
	public String componentName;
	public String description;
	public String pricingLink;

	/**
	 * TODO Put here a description of what this constructor does.
	 *
	 * @param componentName
	 * @param componentDescription
	 */
	public OutputComponents(String componentName, String description, String pricingLink) {
		super();
		this.componentName = componentName;
		this.description = description;
		this.pricingLink = pricingLink;
	}

	/**
	 * Returns the value of the field called 'pricingLink'.
	 * 
	 * @return Returns the pricingLink.
	 */
	public String getPricingLink() {
		return this.pricingLink;
	}

	/**
	 * Sets the field called 'pricingLink' to the given value.
	 * 
	 * @param pricingLink
	 *            The pricingLink to set.
	 */
	public void setPricingLink(String pricingLink) {
		this.pricingLink = pricingLink;
	}

	/**
	 * Returns the value of the field called 'componentName'.
	 * 
	 * @return Returns the componentName.
	 */
	public String getComponentName() {
		return this.componentName;
	}

	/**
	 * Sets the field called 'componentName' to the given value.
	 * 
	 * @param componentName
	 *            The componentName to set.
	 */
	public void setComponentName(String componentName) {
		this.componentName = componentName;
	}

	/**
	 * Returns the value of the field called 'description'.
	 * 
	 * @return Returns the description.
	 */
	public String getDescription() {
		return this.description;
	}

	/**
	 * Sets the field called 'description' to the given value.
	 * 
	 * @param description
	 *            The componedescriptionntDescription to set.
	 */
	public void setDescription(String description) {
		this.description = description;
	}

}
