# Form

### Basic

``` html
<h-form :inline="true">
	<h-form-item label="选项">
    	<h-input placeholder="在此输入"></h-input>
    </h-form-item>

	<h-form-item label="选项">
		<h-input placeholder="在此输入"></h-input>
	</h-form-item>
</h-form>
```


### Options / Form

|     Param      |  Type   | Optional | Default |   Description   |
| :------------: | :-----: | :------: | :-----: | :-------------: |
|     inline     | Boolean |   true   |  false  |   表单内部是否横向排列    |
| label-position | String  | top left |   top   | label位置是在顶部还是左边 |



### Options / Form-item


| Param |  Type  | Optional | Default |      Description       |
| :---: | :----: | :------: | :-----: | :--------------------: |
| label | String |    —     |    —    | the title of the label |
