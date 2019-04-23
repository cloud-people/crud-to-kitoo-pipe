## crud-to-kitoo pipe


### About
Creates Request action and adds kitoo filters in action context, request data is given action, returns observable. Kitoo will send the action.

What should be in context: (look General for more info)
{
	kitooOptions: {
		entities: { 
			$contains: ‘${tag}_${entity}_${version}’
		}
}
}

### How to use
First install dependencies.
```bash
yarn
```
Build package.
```bash
yarn build
```
Run Tests.
```bash
yarn test
```
Get type docs.
```bash
yarn doc
```

### Actions 
1. loadById
2. loadbyQuery
3. removeById
4. removeByQuery
5. create
6. updateById
7. updateByQuery
8. Aggregate
