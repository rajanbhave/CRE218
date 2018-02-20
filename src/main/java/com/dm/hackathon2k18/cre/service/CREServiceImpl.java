package com.dm.hackathon2k18.cre.service;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.dm.hackathon2k18.cre.model.CREData;
import com.dm.hackathon2k18.cre.model.CREOutputData;
import com.dm.hackathon2k18.cre.model.Category;
import com.dm.hackathon2k18.cre.model.OutputCategory;
import com.dm.hackathon2k18.cre.model.OutputComponents;
import com.google.common.base.Splitter;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.google.gson.Gson;

/**
 * TODO Put here a description of what this class does.
 *
 * @author Rajan.Bhave. Created Feb 17, 2018.
 */
public class CREServiceImpl implements CREService {
	@Override
	public Map<String, Map> compare(CREData creData) {
		Map<String, Map> componentsMap = Maps.newHashMap();
		List<Category> categoryList = creData.getCategories();
		for (Category category : categoryList) {
			if (category.getCategoryType().equalsIgnoreCase("Storage")) {
				Map<String, String> computeQuesChoiceMap = category.getQuesChoiceMap();
				componentsMap.put("Storage", this.getStorageComponents(computeQuesChoiceMap));
			} else if (category.getCategoryType().equalsIgnoreCase("Ingest")) {
				Map<String, String> computeQuesChoiceMap = category.getQuesChoiceMap();
				componentsMap.put("Ingest", this.getIngestComponents(computeQuesChoiceMap));

			} else if (category.getCategoryType().equalsIgnoreCase("Compute")) {
				Map<String, String> computeQuesChoiceMap = category.getQuesChoiceMap();
				componentsMap.put("Compute", this.getComputeComponents(computeQuesChoiceMap));
			}
		}

		return componentsMap;

	}

	/**
	 * TODO Put here a description of what this method does.
	 *
	 */
	private HashMap<String, String> getStorageComponents(Map<String, String> computeQuesChoiceMap) {
		String component = null;
		HashMap<String, String> storageComponents = new HashMap();
		if (computeQuesChoiceMap != null && !computeQuesChoiceMap.isEmpty()) {
			if (computeQuesChoiceMap.get("q1").equals("1") || computeQuesChoiceMap.get("q1").equals("2")) {

				if (computeQuesChoiceMap.get("q2").equals("1")) {

					component = "BigQuery/Big Table";
					if (computeQuesChoiceMap.get("q6").equals("1")) {

						component = "BigQuery";
						storageComponents.put(component, Constants.BIGQUERY_DESC + "|" + Constants.BIGQUERY);

					}
					if (computeQuesChoiceMap.get("q7").equals("1")) {

						component = "BigTable";
						storageComponents.put(component, Constants.BIGTABLE_DESC + "|" + Constants.BIGTABLE);

					}
				} else if (computeQuesChoiceMap.get("q2").equals("2")) {

					component = "Cloud SQL/ Cloud Spanner/Cloud Firestore for firebase/ cloud datastore";

					if (computeQuesChoiceMap.get("q3").equals("1")) {

						component = "cloudsql/cloudspanner";

						if (computeQuesChoiceMap.get("q4").equals("1")) {

							component = "CloudSpanner";
							storageComponents.put(component,
									Constants.CLOUD_SPANNER_DESC + "|" + Constants.CLOUD_SPANNER);

						} else {

							component = "CloudSQL";
							storageComponents.put(component, Constants.CLOUD_SQL_DESC + "|" + Constants.CLOUD_SQL);

						}

					} else if (computeQuesChoiceMap.get("q3").equals("2")) {

						component = "Cloud Firestore for Firebase/Cloud Datastore";

						if (computeQuesChoiceMap.get("q5").equals("1")) {

							component = "Cloud Firestore for Firebase";
							storageComponents.put(component, Constants.CLOUD_FIRESTORE_FOR_FIREBASE_DESC + "|"
									+ Constants.CLOUD_FIRESTORE_FOR_FIREBASE);

						} else {
							component = "Cloud Datastore";
							storageComponents.put(component, Constants.DATASTORE_DESC + "|" + Constants.DATASTORE);
						}
					}
				}

			} else if (computeQuesChoiceMap.get("q1").equals("3")) {

				component = "Cloud Storage for Firebase/Google Cloud Storage";

				if (computeQuesChoiceMap.get("q8").equals("1")) {

					component = "Cloud Storage for Firebase";
					storageComponents.put(component,
							Constants.CLOUD_STORE_FOR_FIREBASE + "|" + Constants.CLOUD_STORE_FOR_FIREBASE);

				} else {
					component = "Google Cloud Storage";
					if (computeQuesChoiceMap.get("q11").equals("1")) {

						component = component + "~" + "Multi-Regional";

					} else if (computeQuesChoiceMap.get("q11").equals("2")) {

						component = component + "~" + "Regional";

					} else if (computeQuesChoiceMap.get("q11").equals("3")) {

						component = component + "~" + "Nearline";

					} else if (computeQuesChoiceMap.get("q11").equals("4")) {

						component = component + "~" + "Coldline";

					}
					storageComponents.put(component, Constants.CLOUD_STORAGE_DESC + "|" + Constants.CLOUD_STORAGE);
				}
			}
			if (computeQuesChoiceMap.get("q9").equals("1")) {

				component = "Google Drive";
				storageComponents.put(component, Constants.GOOGLE_DRIVE_DESC + "|" + Constants.GOOGLE_DRIVE);

			}
			if (computeQuesChoiceMap.get("q10").equals("1")) {

				component = "Persistent Disk";
				storageComponents.put(component, Constants.PERSISTENT_DISK_DESC + "|" + Constants.PERSISTENT_DISK);

			}
		}
		return storageComponents;
	}

	private HashMap<String, String> getComputeComponents(Map<String, String> computeQuesChoiceMap) {
		String component = null;
		HashMap<String, String> computeComponents = new HashMap();
		if (computeQuesChoiceMap != null && !computeQuesChoiceMap.isEmpty()) {
			if (computeQuesChoiceMap.get("q1").equals("1")) {
				System.out.println("Component that can be used is Firebase");
				component = "Firebase";
				computeComponents.put(component,
						Constants.CLOUD_FIRESTORE_FOR_FIREBASE_DESC + "|" + Constants.CLOUD_FIRESTORE_FOR_FIREBASE);

			} else {
				if (computeQuesChoiceMap.get("q2").equals("1")) {
					System.out.println("Component that can be used is Google Cloud Function");
					component = "Google Cloud Functions";
					computeComponents.put(component, Constants.CLOUD_FUNCTIONS_DESC + "|" + Constants.CLOUD_FUNCTIONS);

				} else {
					if (computeQuesChoiceMap.get("q3").equals("1")) {
						System.out.println("Component that can be used is Google Compute Engine");
						component = "Google Compute Engine";
						computeComponents.put(component,
								Constants.COMPUTE_ENGINE_DESC + "|" + Constants.COMPUTE_ENGINE);

					} else {
						if (computeQuesChoiceMap.get("q4").equals("1") || computeQuesChoiceMap.get("q5").equals("1")
								|| computeQuesChoiceMap.get("q6").equals("1")) {
							System.out.println("Component that can be used is Google App Engine");
							component = "Google App Engine";
							computeComponents.put(component, Constants.APP_ENGINE_DESC + "|" + Constants.APP_ENGINE);
						} else {
							if (computeQuesChoiceMap.get("q7").equals("1")) {
								System.out.println("Component that can be used is Google Compute Engine");
								component = "Google Compute Engine";
								computeComponents.put(component,
										Constants.COMPUTE_ENGINE_DESC + "|" + Constants.COMPUTE_ENGINE);

							} else {

								if (computeQuesChoiceMap.get("q8").equals("2")) {
									System.out.println("Component that can be used is Google Compute Engine");
									component = "Google Compute Engine";
									computeComponents.put(component,
											Constants.COMPUTE_ENGINE_DESC + "|" + Constants.COMPUTE_ENGINE);

								} else {
									component = "Google Container Engine";
									computeComponents.put(component,
											Constants.KUBERNETES_ENGINE_DESC + "|" + Constants.KUBERNETES_ENGINE);
									System.out.println("Component that can be used is Google Container Engine");
								}
							}
						}
					}
				}
			}
		}
		return computeComponents;
	}

	private HashMap<String, String> getIngestComponents(Map<String, String> ingestQuesChoiceMap) {
		String component = null;
		HashMap<String, String> ingestComponents = new HashMap();
		if (ingestQuesChoiceMap != null && !ingestQuesChoiceMap.isEmpty()) {
			if (ingestQuesChoiceMap.get("q2").equals("1")) {
				component = "Cloud Pub Sub";
				ingestComponents.put(component, Constants.PUB_SUB_DESC + "|" + Constants.PUB_SUB);
			}
			if (ingestQuesChoiceMap.get("q3").equals("1")) {
				component = "Cloud SQL";
				ingestComponents.put(component, Constants.CLOUD_SQL_DESC + "|" + Constants.CLOUD_SQL);
			}
			if (ingestQuesChoiceMap.get("q4").equals("1")) {
				component = "Firebase";
				ingestComponents.put(component,
						Constants.CLOUD_FIRESTORE_FOR_FIREBASE_DESC + "|" + Constants.CLOUD_FIRESTORE_FOR_FIREBASE);
			}
			if (ingestQuesChoiceMap.get("q5").equals("1")) {
				component = "Cloud Spanner";
				ingestComponents.put(component, Constants.CLOUD_SPANNER_DESC + "|" + Constants.CLOUD_SPANNER);
			}
			if (ingestQuesChoiceMap.get("q6").equals("1")) {
				component = "Cloud BigTable";
				ingestComponents.put(component, Constants.BIGTABLE_DESC + "|" + Constants.BIGTABLE);
			}
			if (ingestQuesChoiceMap.get("q7").equals("1")) {
				component = "Cloud Datastore";
				ingestComponents.put(component, Constants.DATASTORE_DESC + "|" + Constants.DATASTORE);
			}
			if (ingestQuesChoiceMap.get("q8").equals("1")) {
				component = "Cloud Storage";
				ingestComponents.put(component, Constants.CLOUD_STORAGE_DESC + "|" + Constants.CLOUD_STORAGE);
			}
		}

		return ingestComponents;

	}

	public String convertToJSON(Map<String, Map> catComponentsMap) {
		Set<String> categories = catComponentsMap.keySet();
		List<OutputCategory> outCatList = Lists.newArrayList();
		for (String categoryType : categories) {
			Map<String, String> componentsMap = catComponentsMap.get(categoryType);
			List<OutputComponents> outCompList = Lists.newArrayList();
			Set<String> componentsSet = componentsMap.keySet();
			for (String componentName : componentsSet) {
				OutputComponents outComp = null;
				String descriptionField = componentsMap.get(componentName);
				String description = "";
				String link = "";
				if (descriptionField.contains("|")) {
					Iterable<String> descFields = Splitter.on('|').trimResults().omitEmptyStrings()
							.split(descriptionField);
					for (Iterator itr = descFields.iterator(); itr.hasNext();) {
						description = (String) itr.next();
						link = (String) itr.next();

					}
					outComp = new OutputComponents(componentName, description, link);
				} else {
					outComp = new OutputComponents(componentName, descriptionField, "");
				}
				outCompList.add(outComp);
			}
			OutputCategory outCat = new OutputCategory(categoryType, outCompList);
			outCatList.add(outCat);

		}
		CREOutputData outData = new CREOutputData(outCatList);
		Gson gson = new Gson();
		String jsonStringFromObj = gson.toJson(outData);
		return jsonStringFromObj;
	}
}
