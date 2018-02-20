package com.dm.hackathon2k18.cre.model;

import java.util.List;

/**
 * TODO Put here a description of what this class does.
 *
 * @author Rajan.Bhave. Created Feb 18, 2018.
 */
public class OutputCategory {
	String categoryType;
	private List<OutputComponents> components;

	/**
	 * Returns the value of the field called 'components'.
	 * 
	 * @return Returns the components.
	 */
	public List<OutputComponents> getComponents() {
		return this.components;
	}

	/**
	 * Sets the field called 'components' to the given value.
	 * 
	 * @param components
	 *            The components to set.
	 */
	public void setComponents(List<OutputComponents> components) {
		this.components = components;
	}

	/**
	 * TODO Put here a description of what this constructor does.
	 *
	 * @param categoryType
	 * @param components
	 */
	public OutputCategory(String categoryType, List<OutputComponents> components) {
		super();
		this.categoryType = categoryType;
		this.components = components;
	}

	/**
	 * Returns the value of the field called 'categoryType'.
	 * 
	 * @return Returns the categoryType.
	 */
	public String getCategoryType() {
		return this.categoryType;
	}

	/**
	 * Sets the field called 'categoryType' to the given value.
	 * 
	 * @param categoryType
	 *            The categoryType to set.
	 */
	public void setCategoryType(String categoryType) {
		this.categoryType = categoryType;
	}
	/**
	 * Returns the value of the field called 'components'.
	 * 
	 * @return Returns the components.
	 */

}
