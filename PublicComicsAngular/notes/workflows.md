Adding a new form
---

1. Create a barebones form in html.
```html
<form class="form-horizontal" ng-submit="submitForm()">
    <fieldset>
        <legend>Legend</legend>
        <div class="form-group">
            <label for="newObjectNewField" class="col-lg-2 control-label">Title</label>
            <div class="col-lg-10">
                <input ng-model="newObject.field" type="text" class="form-control" id="newObjectNewField" placeholder="New Field" autocomplete="on" style="cursor: pointer; background-attachment: scroll; background-position: 100% 50%; background-repeat: no-repeat;">
            </div>
        </div>
        <div class="form-group">
            <div class="col-lg-10 col-lg-offset-2">
                <button type="reset" class="btn btn-default" ng-click="cancelForm()">Cancel</button>
                <button type="submit" class="btn btn-primary" ng-click="submitForm()">Submit</button>
            </div>
        </div>
    </fieldset>
</form>
```
2. In the controller that runs in the state that the form is in, add the functions that are defined in the the cancelForm and submitForm functions.
```javascript
// Example State Scripts
var ExampleStateCtrl = function($scope, $log) {
	$scope.submitForm = function() {
        
    };

	$scope.cancelForm = function() {
        
    };
}
```
3. Make sure you can hit breakpoints when the submit and cancel buttons are clicked.