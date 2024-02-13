# WorldgenEvents.remove

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: [RemoveWorldgenEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/level/gen/RemoveWorldgenEventJS.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| printFeaturesForType | GenerationStep$Decoration, BiomeFilter, boolean |  | void | ✘ |
| removeAllFeatures |  |  | void | ✘ |
| removeAllFeatures | BiomeFilter |  | void | ✘ |
| removeAllFeatures | BiomeFilter, GenerationStep$Decoration |  | void | ✘ |
| removeFeatureById | GenerationStep$Decoration, ResourceLocation[] |  | void | ✘ |
| removeFeatureById | BiomeFilter, GenerationStep$Decoration, ResourceLocation[] |  | void | ✘ |
| printFiltered | GenerationStep$Decoration |  | void | ✘ |
| printFiltered | GenerationStep$Decoration, BiomeFilter |  | void | ✘ |
| printFiltered |  |  | void | ✘ |
| printFeatures | GenerationStep$Decoration, BiomeFilter |  | void | ✘ |
| printFeatures | GenerationStep$Decoration |  | void | ✘ |
| printFeatures |  |  | void | ✘ |
| printSpawns | MobCategory |  | void | ✘ |
| printSpawns |  |  | void | ✘ |
| removeSpawns | Consumer<RemoveSpawnsProperties> |  | void | ✘ |
| removeAllSpawns |  |  | void | ✘ |
| removeOres | Consumer<RemoveOresProperties> |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
WorldgenEvents.remove((event) => {
	// This space (un)intentionally left blank
});
```

