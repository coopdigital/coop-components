The default Grid provides classes spanning 12 columns, and provides breakpoints at the following screen sizes:

* **All** (`.all-{column-span}`) - 0px and up
* **Extra small** (`.xsmall-{column-span}`) - 320px and up
* **Small** (`.small-{column-span}`) - 480px and up
* **Medium** (`.medium-{column-span}`) - 750px and up
* **Large** (`.large-{column-span}`) - 960px and up
* **Extra large** (`.xlarge-{column-span}`) - 1300px and up

These settings can be overriden by specifying your own list of screen sizes you want columns available for. To keep the size of the resulting production stylesheet down, it is recommended to tailor the settings to your requirements, to make sure only the necessary classes are generated. For instance, if your service uses a 4 column grid, and only requires breakpoints at the medium screen size, you should alter the settings like so:

```
$grid-screen-sizes: ("medium");
$grid-total-columns: 4;
```
    
**Note:** the `.all-*` classes are always available, even if the $grid-screen-sizes list is empty.

The centering can be undone for subsequent breakpoints:

## Grid helpers

The following helpers are included by default in the resulting CSS. If you do not make use of them, it is recommended to exclude them by setting them to false:

```
$grid-include-center-classes: false;
$grid-include-pull-classes: false;
$grid-include-push-classes: false;
$grid-include-offset-classes: false;
```
    
These helpers can be applied to specific breakpoints only.

### Centering classes

These allow centering of columns which do not fill the whole width of the viewport.

### Offsetting classes

These classes allow adding an offset to the left of any column. They can be applied to specific breakpoints only.

### Push/pull classes

These classes allow re-ordering of the columns by pushing and pulling them relative to their base position.

### Collapse columns

Collapsed columns have their padding removed. Columns can be collapsed individually, or whole rows can be collapsed at once by adding the class `.collapse` to the relevant column or row element.