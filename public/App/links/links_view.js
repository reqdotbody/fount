<div ng-controller="linksController">
  <form novalidate class="simple-form">
    Username: <input type="text" ng-model="link.username" /><br />
    Url: <input type="url" ng-model="link.url" /><br />
    Title: <input type="text" ng-model="link.title" /><br />
    Subcategory: <input type="text" ng-model="link.subcategory" /><br />
    <input type="submit" ng-click="addLink(link)" value="Save" />
  </form>
</div>