<script setup lang="ts">
import type { SupportedLanguagesType } from '@uiron/locales';

import { SUPPORT_LANGUAGES } from '@uiron/constants';
import { Languages } from '@uiron/icons';
import { loadLocaleMessages } from '@uiron/locales';
import { preferences, updatePreferences } from '@uiron/preferences';

import { VbenDropdownRadioMenu, VbenIconButton } from '@uiron-core/shadcn-ui';

defineOptions({
  name: 'LanguageToggle',
});

async function handleUpdate(value: string) {
  const locale = value as SupportedLanguagesType;
  updatePreferences({
    app: {
      locale,
    },
  });
  await loadLocaleMessages(locale);
}
</script>

<template>
  <div>
    <VbenDropdownRadioMenu
      :menus="SUPPORT_LANGUAGES"
      :model-value="preferences.app.locale"
      @update:model-value="handleUpdate"
    >
      <VbenIconButton>
        <Languages class="text-foreground size-4" />
      </VbenIconButton>
    </VbenDropdownRadioMenu>
  </div>
</template>
