## Translation file guidelines
### Translation style guide
Element | Number of words max. | Number of max. character | Other comments
--- | :---: | :---: | ---
Title | 3 | - | Should be concise and self explanatory
Button | 3 | 15 - 20 | Try to avoid syntactic sugar, be super concise with as few words as possible , always using infinitive form.

#### Global style guide

Keep in mind those few rules to avoid layout problem because of translations:
* Try to respect the translation length provided by developers (english one), this is the one tested.
* **KEEP IT SIMPLE** golden rule for button and title. Try to be the more concise as possible by using as few words as possible.
* Button and title should be self explanatory, we should know what a button does just by reading is label.
* Do not always translate word by word between languages. Sometime a better word in native language can be more explicit.

### Key concepts
Each translation is distributed according to a certain granularity.

This granularity depends on three types of objects: **container objects**, **qualifier objects** and **component objects**.

#### Container objects
These objects are associated to an element which will contain some components. A translation can't directly be declared in a **container object** with few exceptions.

Common examples of container objects could be: A screen, a functional block, a popup, a toast, a form,...

#### Qualifier objects
These are object that qualify a container in order to be more specific. A translation can't directly be declared in a **container object** with few exceptions.

Common examples of qualifier objects could be: a confirmation popup, an informative toast,...
#### Component objects
Component objects are objects where translations will be declared. Component objects should always be in a **container** or **qualifier object**.
A component object groups all translations associated to a same view element (label, button, text, title).

Common examples of component objects could be: form labels, buttons,...

To conclude on the differentiations between **container**, **qualifier** and **component objects**, we will break down 
an example of a translation key:
> Treatment.Popup.Confirmation.Delete.Action.Cancel 
* **Treatment** represents the functional block which is linked to applying or displaying treatments. **(container object)**
* **Popup** represents the fact that we are in a popup. **(container object)**
* **Confirmation** represents the type of the popup. **(qualifier object)**
* **Delete** represents the fact that we are in a confirmation popup in order to confirm an action of suppression. **(qualifier object)**
* **Action** represents the fact that we want a translation for an element which calls to action. (link or button) **(component object)**
* **Cancel** represents the translation key of the Cancel button. **(translation)**

N.B: All objects are in the singular form even if they have several translations. This is for a better reading. 
So for example Action instead of Action**s**


### Common objects

Here we find all the common objects that you may want to implement.

#### Form (Container object)
Form object represents all translations that we would use in a form. This object is often used directly in a container object like a screen or a popup.

The best practice when using forms is to structure this object like below :
```json
{
...
  "ContainerName": { // Here the global container (screen, functional object, popup,...)
    "Form": { // Our object
      "Label": { // (Component object) Here you will put all labels that you form will use
        ...
      },
      "Placeholder": { // (Component object) Here you will put all placeholders that you form will use
        ...
      },
      "NotFound": { // (Component object) Here you will put all elements not found texts that you form will use (specially use in selects)
        ...
      },
      "Error": {  // (Component object) Here you will put all error texts that you form will use
        ...
      }
    }
  }
}
```

for eg:
```json
{
  "Treatment": {
    "Form": {
      "Error": {
        "Persistence": "The max persistence must be greater or equal than the filled min persistence",
        "RegDoseGTDefaultDose": "The filled dose must be lower than the default dose",
        "RegDoseLTMinDose": "The filled dose must be greater than 0",
        "Threshold": "The max threshold must be greater than the filled min threshold"
      },
      "InfoText": {
        "DefaultDose": "Default dose: {{dose}}",
        "DefaultPersistence": "Default value: {{persistence}}"
      },
      "Label": {
        "ApplicationDate": "Application date",
        "CurativeDays": "Number of curative days",
        "CurativeEffect": "Curative effect",
        "DiseaseTargeted": "Disease(s) targeted",
        "Dose": "Dose ({{unit}})",
        "MaxPersistence": "Max. persistence (days)",
        "MaxRainThreshold": "Max. amount of rain threshold",
        "MinPersistence": "Min. persistence (days)",
        "MinRainThreshold": "Min. amount of rain threshold",
        "ProductName": "Product name",
        "RainThreshold": "Amount of rain threshold",
        "WashOffSusceptibility": "Wash-off susceptibility"
      },
      "NotFound": {
        "Disease": "No disease found",
        "Product": "No product found"
      },
      "Placeholder": {
        "DiseaseTargeted": "Disease(s) targeted",
        "ProductName": "Product name"
      }
    }
  }
}
```
#### Action (Component object)
This object represents all translations associated to elements which call to an action (button, link)
 ```json
 {
...
  "ContainerName": { // Here the global container (screen, functional object, popup, ...)
     "Action": { // Our object
        ...
     }
  }
}
 ```
for eg:
 ```json
 {
  "Treatment": {
    "Action": {
      "Cancel": "Cancel",
      "CreateMixture": "Create mixture",
      "Delete": "Delete this treatment",
      "EditMixture": "Edit mixture",
      "Save": "Save changes"
    }
  }
}
 ```
#### Popup (Container object)
This object represents all popups linked to a screen or a functional block.

A qualifier object is often used to specify which kind of popup the translation given are associated.
 ```json
 {
   "ScreenName": { // Here the global container
     "Popup": { // Our object
        "Confirmation": { // Here we will define each confirmation popup displayed after action
          "Delete": { // Here we will define the delete confirmation popup displayed after deleting an element
            "Title": "Title", // Popup title
            "Text": "Text" // Confirmation opup text
            ...
          },
          "Update": { // Here we will define the update confirmation popup displayed after editing an element
            ...
          }
        },
        "Create": { // Here we will define the popup displayed when we want to create an element on this screen
          "CreateTitle": "Title" // If the same popup is used for creation & edit. Else we use "Title" key instead.
          "EditTitle": "Title" // If the same popup is used for creation & edit. Else we create an Edit qualifier object with a "Title" translation.
          ...
        }
     }
  }
}
```
for eg:
 ```json
{
  "PlotSettings": {
    "Popup": {
      "Confirmation": {
        "Delete": {
          "Action": {
            "Cancel": "Cancel",
            "Confirm": "Confirm"
          },
          "Text": "You are going to delete this plot. Are you sure?",
          "Title": "Delete plot"
        },
        "Update": {
          "Action": {
            "Cancel": "Cancel",
            "Confirm": "Confirm"
          },
          "Text": "Your changes are going to affect your plot. Are you sure?",
          "Title": "Save changes confirmation"
        }
      }
    }
  }
}
```
#### Toast (Container object)
This object represents all toast linked to a specific container object.

It is preferable to use a qualifier object to specify which kind of toast will be displayed (info, error).
 ```json
 {
   "ScreenName": { // Here the global container
     "Toast": { // Our object
        "Info": { // Here we will define each informative toast displayed on this screen
          ...
        },
        "Error": { // Here we will define each error toast displayed on this screen
          ...
        }
     }
  }
}
```
for eg:
 ```json
{
  "PlotSettings": {
    "Toast": {
      "Info": {
        "Create": "Your plot has been added. The information is loading",
        "Delete": "Your plot has been deleted",
        "Update": "Your plot has been updated. The information is loading"
      }
    }
  }
}
```
#### Table (Container object)
This object represents a table in a container object.

It is followed by Column object which represents each column of the table.
 ```json
 {
...
  "ContainerName": { // Here the global container (screen, functional object, popup, ...)
     "Table": { // Our object
        "Column": { // Column object (a qualifier object must be used before if there is multiple table on this container object)
            "ColumnName1": { // The Column name in Pascal case
                "Header": "ColumnName1" // The header of the column translated
                ...
            },
            "ColumnName2": {
                "Header": "ColumnName2"
            },
            "ColumnName3": {
                "Header": "ColumnName3"
            }
        }
    }
  }
}
```
for eg:
 ```json
 {
  "Products": {
    "Table": {
      "Column": {
        "Actions": {
            "Header": "Actions"
        },
        "Diseases": {
            "Header": "Disease(s)",
            "Separator": "; "
        },
        "LastUpdate": {
            "Header": "Last update"
        },
        "Name": {
            "Header": "Product name"
        }
      }
    }
  }
}
```
### Special case
#### Common (Container object)
This object contains all global translations. Generally we put in this object, all translations with business value or which are not linked to a specific screen or container.

I encourage you to take a look at this object.
