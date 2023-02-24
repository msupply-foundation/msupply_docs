+++
title = "Vaccine Dispensing Setup"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 351
template = "mobile/page.html"

[extra]
toc = true
top = true
+++


## Store settings on your central mSupply server

Your store must be set as a dispensary (go to *Special > Show stores* and double-click on your store):

![Custom invoices button on Navigator](/mobile/introduction/images/VDS_store_settings.png)

Ensure that your store has visibility of at least one item that is a vaccine:

![Custom invoices button on Navigator](/mobile/introduction/images/VDS_store_visibility.png)

If you want to record when a patient has refused a vaccine, you need to create a patient event with the code 'RV'. Otherwise, no record will be created:

![Custom invoices button on Navigator](/mobile/introduction/images/VDS_refuse_vaccine.png)

![Custom invoices button on Navigator](/mobile/introduction/images/VDS_refuse_vaccine2.png)

If you want to record extra patient information during vaccinations, get in contact with The mSupply Foundation as we have no interface for you to create the forms, yet.

To setup **vaccinators** then choose *Special > Show vaccinators* from the menus:

![Custom invoices button on Navigator](/mobile/introduction/images/VDS_vaccinators.png)
![Custom invoices button on Navigator](/mobile/introduction/images/VDS_vaccinators2.png)

The standard mSupply mobile interface looks like this:

![Custom invoices button on Navigator](/mobile/introduction/images/VDS_standard_interface.png)

After completing the setup described above, log in to mSupply mobile and synchronise once, and then your interface will look like this, now showing vaccine dispensing as an option:

![Custom invoices button on Navigator](/mobile/introduction/images/VDS_setup_finalize.png)

## Patient Extra Information Setup

We use the JSON-Schema standard to define both what information can be shown, and the constraints on that information.

Constraints can include:

  * If information is compulsory
  * The type of value (e.g. only a number)
  * Minimum and Maximum values
  * Default values

Once an agreed set of information has been defined, contact us to upload the form onto your server.
In future versions of mSupply you will be able to do this process yourself.

Below is an example of a JSON schema.
The schema and the resulting user interface can be viewed [here](https://rjsf-team.github.io/react-jsonschema-form/#eyJmb3JtRGF0YSI6eyJyZXNwb25kZW50Q29udGFjdERhdGEiOnt9LCJwYXRpZW50Q2xpbmljYWxEYXRhIjp7InByZXZpb3VzU2VyaW91c0FsbGVyZ2ljUmVhY3Rpb25zIjpmYWxzZSwicHJldmlvdXNBZHZlcnNlRXZlbnRzRm9sbG93aW5nSW1tdW5pc2F0aW9uIjpmYWxzZSwiY3VycmVudGx5UHJlZ25hbnQiOmZhbHNlLCJjdXJyZW50bHlMYWN0YXRpbmciOmZhbHNlfSwiQ292aWQgMTkgU3RhdHVzIjp7ImV2ZXJUZXN0ZWRQb3NpdGl2ZUZvckNPVklEMTkiOmZhbHNlfSwiQ292aWQgMTkgVmFjY2luYXRpb24gRGF0YSI6eyJDb3ZpZC0xOSBWYWNjaW5lIFR5cGUiOiJBc3RyYS16ZW5lY2EiLCJBbnkgQUVGSSBleHBlcmllbmNlZCI6ZmFsc2V9LCJmaXJzdE5hbWUiOiJDaHVjayIsImxhc3ROYW1lIjoiTm9ycmlzIiwiYWdlIjo3NSwiYmlvIjoiUm91bmRob3VzZSBraWNraW5nIGFzc2VzIHNpbmNlIDE5NDAiLCJwYXNzd29yZCI6Im5vbmVlZCJ9LCJzY2hlbWEiOnsidHlwZSI6Im9iamVjdCIsInRpdGxlIjoiRXh0cmEgaW5mb3JtYXRpb24iLCJwcm9wZXJ0aWVzIjp7InJlc3BvbmRlbnRDb250YWN0RGF0YSI6eyJ0aXRsZSI6IlJlc3BvbmRlbnQgQ29udGFjdCBEYXRhIiwiZGVzY3JpcHRpb24iOiJDb250YWN0IGRhdGEgb2YgdGhlIHJlc3BvbmRlbnQgaWYgdGhlIHJlc3BvbmRlbnQgaXMgbm90IHRoZSBwYXRpZW50LiIsInR5cGUiOiJvYmplY3QiLCJwcm9wZXJ0aWVzIjp7ImZpcnN0TmFtZSI6eyJ0aXRsZSI6IkZpcnN0IE5hbWUiLCJkZXNjcmlwdGlvbiI6IlRoZSBmaXJzdCBuYW1lIG9mIHRoZSByZXNwb25kZW50IiwidHlwZSI6InN0cmluZyIsIm1heExlbmd0aCI6MiwiZXJyb3JNZXNzYWdlIjoiSGV5ISB0aGF0IG5hbWVzIHdheSB0byBsb25nLCBidWRkeSEifSwibGFzdE5hbWUiOnsidGl0bGUiOiJMYXN0IE5hbWUiLCJkZXNjcmlwdGlvbiI6IlRoZSBsYXN0IG5hbWUgb2YgdGhlIHJlc3BvbmRlbnQiLCJ0eXBlIjoic3RyaW5nIiwibWluTGVuZ3RoIjo1MCwiZXJyb3JNZXNzYWdlIjoiSGV5ISB0aGF0IG5hbWVzIHdheSB0byBzaG9ydCwgYnVkZHkhIn0sInJlbGF0aW9uc2hpcFRvUGF0aWVudCI6eyJ0aXRsZSI6IlJlbGF0aW9uc2hpcCB0byBwYXRpZW50IiwiZGVzY3JpcHRpb24iOiJUaGUgcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlIHJlc3BvbmRlbnQgYW5kIHBhdGllbnQiLCJ0eXBlIjoic3RyaW5nIiwiZW51bSI6WyJNb3RoZXIiLCJGYXRoZXIiLCJTaXN0ZXIiLCJCcm90aGVyIiwiQXVudHkiLCJVbmNsZSIsIkdyYW5kbW90aGVyIiwiR3JhbmRmYXRoZXIiLCJGcmllbmQvTmVpZ2hib3VyIiwiT3RoZXIiXX19fSwicGF0aWVudENsaW5pY2FsRGF0YSI6eyJ0aXRsZSI6IlBhdGllbnQgQ2xpbmljYWwgRGF0YSIsImRlc2NyaXB0aW9uIjoiVGhlIHBhdGllbnRzIGNsaW5pY2FsIGRhdGEiLCJ0eXBlIjoib2JqZWN0IiwicHJvcGVydGllcyI6eyJjb21vcmJpZGl0aWVzSW1tdW5vY29tcHJvbWlzZWQiOnsidGl0bGUiOiJDb21vcmJpZGl0aWVzIC8gSW1tdW5vY29tcHJvbWlzZWQiLCJkZXNjcmlwdGlvbiI6IlRoZSBwYXRpZW50cyBjb21vcmJpZGl0aWVzIiwidHlwZSI6InN0cmluZyIsImVudW0iOlsiRGlhYmV0ZXMiLCJIeXBlcnRlbnNpb24iLCJBc3RobWEiLCJDYW5jZXIgKGFsbCB0eXBlcykiLCJDZXJlYnJhbCBWYXNjdWxhciBBY2NpZGVudCIsIkNocm9uaWMgS2lkbmV5IERpc2Vhc2UiLCJDaHJvbmljIE9ic3RydWN0aXZlIEFpcndheSBEaXNlYXNlIiwiSW1tdW5vY29tcHJvbWlzZWQiLCJSaGV1bWF0aWMgSGVhcnQgRGlzZWFzZSIsIklzY2hlbWljIEhlYXJ0IERpc2Vhc2UiLCJPdGhlciJdfSwicHJldmlvdXNTZXJpb3VzQWxsZXJnaWNSZWFjdGlvbnMiOnsidGl0bGUiOiJQcmV2aW91cyBzZXJpb3VzIGFsbGVyZ2ljIHJlYWN0aW9ucyIsImRlc2NyaXB0aW9uIjoiSGFzIHRoZSBwYXRpZW50IGhhZCBhbnkgc2VyaW91cyBhbGxlcmdpYyByZWFjdGlvbnMgaW4gdGhlIHBhc3Q/IiwidHlwZSI6ImJvb2xlYW4iLCJkZWZhdWx0IjpmYWxzZX0sInByZXZpb3VzQWR2ZXJzZUV2ZW50c0ZvbGxvd2luZ0ltbXVuaXNhdGlvbiI6eyJ0aXRsZSI6IlByZXZpb3VzIGFkdmVyc2UgZXZlbnRzIGZvbGxvd2luZyBpbW11bmlzYXRpb24iLCJkZXNjcmlwdGlvbiI6IkhhcyB0aGUgcGF0aWVudCBoYWQgYW55IGFkdmVyc2UgZWZmZWN0cyBmb2xsb3dpbmcgYW4gaW1tdW5pc2F0aW9uIGluIHRoZSBwYXN0PyIsInR5cGUiOiJib29sZWFuIiwiZGVmYXVsdCI6ZmFsc2V9LCJjdXJyZW50bHlQcmVnbmFudCI6eyJ0aXRsZSI6IkN1cnJlbnRseSBQcmVnbmFudCIsImRlc2NyaXB0aW9uIjoiSXMgdGhlIHBhdGllbnQgY3VycmVudGx5IHByZWduYW50PyIsInR5cGUiOiJib29sZWFuIiwiZGVmYXVsdCI6ZmFsc2V9LCJjdXJyZW50bHlMYWN0YXRpbmciOnsidGl0bGUiOiJjdXJyZW50bHlMYWN0YXRpbmciLCJkZXNjcmlwdGlvbiI6IklzIHRoZSBwYXRpZW50IGN1cnJlbnRseSBsYWN0YXRpbmc/IiwidHlwZSI6ImJvb2xlYW4iLCJkZWZhdWx0IjpmYWxzZX19fSwiQ292aWQgMTkgU3RhdHVzIjp7InR5cGUiOiJvYmplY3QiLCJwcm9wZXJ0aWVzIjp7ImV2ZXJUZXN0ZWRQb3NpdGl2ZUZvckNPVklEMTkiOnsidHlwZSI6ImJvb2xlYW4iLCJkZWZhdWx0IjpmYWxzZSwiZGVzY3JpcHRpb24iOiJIYXMgdGhlIHBhdGllbnQgZXZlciB0ZXN0ZWQgcG9zaXRpdmUgZm9yIENPVklELTE5JyIsInRpdGxlIjoiRXZlciB0ZXN0ZWQgcG9zaXRpdmUgZm9yIENPVklELTE5In0sIkRhdGUgb2YgZGlhZ25vc2lzIjp7InRpdGxlIjoiRGF0ZSBvZiBkaWFnbm9zaXMiLCJmb3JtYXQiOiJkYXRlIiwidHlwZSI6InN0cmluZyJ9fX0sIkNvdmlkIDE5IFZhY2NpbmF0aW9uIERhdGEiOnsidHlwZSI6Im9iamVjdCIsInByb3BlcnRpZXMiOnsiQ292aWQtMTkgVmFjY2luZSBUeXBlIjp7InR5cGUiOiJzdHJpbmciLCJlbnVtIjpbIkFzdHJhLXplbmVjYSIsIlBmaXplciIsIk1vZGVybmEiLCJKb2huc29uICYgSm9obnNvbiJdLCJ0aXRsZSI6IkNPVklELTE5IFZhY2NpbmUgdHlwZSIsImRlc2NyaXB0aW9uIjoiVGhlIHR5cGUgb2YgQ09WSUQtMTkgdmFjY2luZSB0aGUgcGF0aWVudCBpcyByZWNlaXZpbmciLCJkZWZhdWx0IjoiQXN0cmEtemVuZWNhIn0sIkRhdGUgQ09WSUQtMTkgdmFjY2luZSBkb3NlIDEiOnsidHlwZSI6InN0cmluZyIsImZvcm1hdCI6ImRhdGUiLCJ0aXRsZSI6IkRhdGUgQ09WSUQtMTkgdmFjY2luZSBkb3NlIDEiLCJkZXNjcmlwdGlvbiI6IlRoZSBkYXRlIG9mIHRoZSBwYXRpZW50cyBmaXJzdCBDb3ZpZC0xOSB2YWNjaW5lIiwiZXJyb3JNZXNzYWdlIjoiRXJyb3IgbWVzc2FnZSJ9LCJEYXRlIENPVklELTE5IHZhY2NpbmUgZG9zZSAyIjp7InR5cGUiOiJzdHJpbmciLCJmb3JtYXQiOiJkYXRlIiwidGl0bGUiOiJEYXRlIENPVklELTE5IHZhY2NpbmUgZG9zZSAyIiwiZGVzY3JpcHRpb24iOiJUaGUgZGF0ZSBvZiB0aGUgcGF0aWVudHMgc2Vjb25kIENvdmlkLTE5IHZhY2NpbmUifSwiQW55IEFFRkkgZXhwZXJpZW5jZWQiOnsidHlwZSI6ImJvb2xlYW4iLCJkZWZhdWx0IjpmYWxzZSwidGl0bGUiOiJBbnkgQUVGSSBleHBlcmllbmNlZCIsImRlc2NyaXB0aW9uIjoiSGFzIHRoZSBwYXRpZW50IGV4cGVyaWVuY2VkIGFueSBBRUZJIn0sIlJlcG9ydGluZyBmb3JtIGZvciBBRUZJIGlmIEFFRkkgZXhwZXJpZW5jZWQiOnsidHlwZSI6InN0cmluZyIsInRpdGxlIjoiUmVwb3J0aW5nIGZvcm0gZm9yIEFFRkkgaWYgQUVGSSBleHBlcmllbmNlZCIsImRlc2NyaXB0aW9uIjoiSSBkdW5ubyB3aGF0IHRoaXMgaXMifX19fX0sInVpU2NoZW1hIjp7InJlc3BvbmRlbnRDb250YWN0RGF0YSI6eyJyZWxhdGlvbnNoaXBUb1BhdGllbnQiOnsidWk6cGxhY2Vob2xkZXIiOiJTZWxlY3QgYSByZWxhdGlvbnNoaXAifX0sInBhdGllbnRDbGluaWNhbERhdGEiOnsiY29tb3JiaWRpdGllc0ltbXVub2NvbXByb21pc2VkIjp7InVpOnBsYWNlaG9sZGVyIjoiUGxlYXNlIHNlbGVjdCwgaWYgYXBwbGljYWJsZS4ifX0sIkNvdmlkIDE5IFZhY2NpbmF0aW9uIERhdGEiOnsiRGF0ZSBDT1ZJRC0xOSB2YWNjaW5lIGRvc2UgMSI6eyJlcnJvck1lc3NhZ2UiOiJFcnJvciBtZXNzYWdlIn19fSwidGhlbWUiOiJkZWZhdWx0IiwibGl2ZVNldHRpbmdzIjp7InZhbGlkYXRlIjpmYWxzZSwiZGlzYWJsZSI6ZmFsc2UsIm9taXRFeHRyYURhdGEiOmZhbHNlLCJsaXZlT21pdCI6ZmFsc2V9fQ==).

### Example Schema

```javascript
{
  "type": "object",
  "title": "Extra information",
  "properties": {
    "respondentContactData": {
      "title": "Respondent Contact Data",
      "description": "Contact data of the respondent if the respondent is not the patient.",
      "type": "object",
      "properties": {
        "firstName": {
          "title": "First Name",
          "description": "The first name of the respondent",
          "type": "string",
          "maxLength": 2,
          "errorMessage": "Hey! That name is way too long, buddy!"
        },
        "lastName": {
          "title": "Last Name",
          "description": "The last name of the respondent",
          "type": "string",
          "minLength": 50,
          "errorMessage": "Hey! That name is way too short, buddy!"
        },
        "relationshipToPatient": {
          "title": "Relationship to patient",
          "description": "The relationship between the respondent and patient",
          "type": "string",
          "enum": [
            "Mother",
            "Father",
            "Sister",
            "Brother",
            "Aunty",
            "Uncle",
            "Grandmother",
            "Grandfather",
            "Friend/Neighbour",
            "Other"
          ]
        }
      }
    },
    "patientClinicalData": {
      "title": "Patient Clinical Data",
      "description": "The patient's clinical data",
      "type": "object",
      "properties": {
        "comorbiditiesImmunocompromised": {
          "title": "Comorbidities / Immunocompromised",
          "description": "The patient's comorbidities",
          "type": "string",
          "enum": [
            "Diabetes",
            "Hypertension",
            "Asthma",
            "Cancer (all types)",
            "Cerebral Vascular Accident",
            "Chronic Kidney Disease",
            "Chronic Obstructive Airway Disease",
            "Immunocompromised",
            "Rheumatic Heart Disease",
            "Ischemic Heart Disease",
            "Other"
          ]
        },
        "previousSeriousAllergicReactions": {
          "title": "Previous serious allergic reactions",
          "description": "Has the patient had any serious allergic reactions in the past?",
          "type": "boolean",
          "default": false
        },
        "previousAdverseEventsFollowingImmunisation": {
          "title": "Previous adverse events following immunisation",
          "description": "Has the patient had any adverse effects following an immunisation in the past?",
          "type": "boolean",
          "default": false
        },
        "currentlyPregnant": {
          "title": "Currently Pregnant",
          "description": "Is the patient currently pregnant?",
          "type": "boolean",
          "default": false
        },
        "currentlyLactating": {
          "title": "currentlyLactating",
          "description": "Is the patient currently lactating?",
          "type": "boolean",
          "default": false
        }
      }
    },
    "Covid 19 Status": {
      "type": "object",
      "properties": {
        "everTestedPositiveForCOVID19": {
          "type": "boolean",
          "default": false,
          "description": "Has the patient ever tested positive for COVID-19'",
          "title": "Ever tested positive for COVID-19"
        },
        "Date of diagnosis": {
          "title": "Date of diagnosis",
          "format": "date",
          "type": "string"
        }
      }
    },
    "Covid 19 Vaccination Data": {
      "type": "object",
      "properties": {
        "Covid-19 Vaccine Type": {
          "type": "string",
          "enum": [
            "Astra-zeneca",
            "Pfizer",
            "Moderna",
            "Johnson & Johnson"
          ],
          "title": "COVID-19 Vaccine type",
          "description": "The type of COVID-19 vaccine the patient is receiving",
          "default": "Astra-zeneca"
        },
        "Date COVID-19 vaccine dose 1": {
          "type": "string",
          "format": "date",
          "title": "Date COVID-19 vaccine dose 1",
          "description": "The date of the patient's first Covid-19 vaccine",
          "errorMessage": "Error message"
        },
        "Date COVID-19 vaccine dose 2": {
          "type": "string",
          "format": "date",
          "title": "Date COVID-19 vaccine dose 2",
          "description": "The date of the patient's second Covid-19 vaccine"
        },
        "Any AEFI experienced": {
          "type": "boolean",
          "default": false,
          "title": "Any AEFI experienced",
          "description": "Has the patient experienced any AEFI"
        },
        "Reporting form for AEFI if AEFI experienced": {
          "type": "string",
          "title": "Reporting form for AEFI if AEFI experienced",
          "description": "I dunno what this is"
        }
      }
    }
  }
}
```

