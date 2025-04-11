<script lang="ts" setup>
import { AuthenticationQrCodeLogin } from '@uiron/common-ui';
import { LOGIN_PATH } from '@uiron/constants';

defineOptions({ name: 'QrCodeLogin' });
</script>

<template>
  <AuthenticationQrCodeLogin :login-path="LOGIN_PATH" />
</template>
