# Information

Base theme for Hugo.

## Install

```
git submodule add https://github.com/pkgstore/hugo-ui-base.git themes/ui-base
```

## Update

```
git submodule update --remote
```

## Uninstall

```
git submodule deinit -f themes/ui-base && git rm -r --cached themes/ui-base && rm -rf .git/modules/themes/ui-base
```

## Features / Особенности

- Некоторые категории носят функциональный характер.
  - Если нода в категории `InDev`, то она приобретает плашку **Информация в доработке**.
  - Если нода в категории `Subjectivity`, то она приобретает плашку **Субъективное мнение автора**.
