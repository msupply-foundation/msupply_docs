+++
title = "Global Preferences"
description = "Global Preferences Configuration"
date =  2025-05-21
updated = 2025-05-21
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

The Global preferences list is available only on the [Open mSupply Central Server](/docs/getting_started/central-server). They are preferences which apply to all Open mSupply sites.

## Viewing Global Preferences

To configure Global Preferences, go to the Global Preferences page under the Manage menu:
![goto: global preferences](images/goto_global_preferences.png)

You will be presented with the set of currently available Global Preferences:

![facility list](images/edit_global_preferences.png)

Global Preferences can be configured by turning these options on or off. Any updates will be saved automatically.

## Available Preferences

| Preference Name                      | Description                                                                                                                                                      |
| :----------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Allow tracking of stock by donor** | Adds a donor column to stock management screens. This allows you to track which donor a stock item is from.                                                      |
| **Show Contact Tracing**             | Enables the [Contact Tracing](/docs/programs/program-module/#contact-tracing) feature for Patients.                                                              |
| **Gender Options**                   | The gender options available for clinicians and patients. This defines the options shown in gender filters and which can be assigned to clinicians and patients. |
| **Custom Translations**              | Configure overrides for terms used throughout the application.                                                                                                   |
| **Sync records display threshold**   | Number of sync records that can be pending before showing an alert over the Sync button.                                                                         |

### Custom Translations

The Custom Translations preference allows you to override specific terms used in the application. This is useful for localization or to adapt terminology to your specific context.

<div class="note">
Use this feature carefully. It can lead to confusion if terms do not match our documentation, or if they are not consistent across the application.
</div>

You can search by any text you see within the application, or if you know the translation key, you can search by that as well:

![custom translations search](images/custom_translation_search.png)

Select the translation you want to change, and then enter the new text in the input field:

![custom translations edit](images/custom_translation_edit.png)

Some translations include variables, which will be replaced with the appropriate values when they are used. You can move these variables around within the text, but ensure you keep them intact, so the messages continue to make sense. Variables are enclosed in double curly braces, like this: `{{variable_name}}`.

![custom translations variable](images/custom_translation_variable.png)

For translations that include number-based variables, we also support pluralization. If you select one of these translations, you will see both a `_one` and `_other` translation are added. Make sure you provide the correct text for both cases:

![custom translations pluralization](images/custom_translation_count.png)
