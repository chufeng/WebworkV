<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>
<template>
  <YunFooter>
    <!-- 自定义页脚内容 -->
    <a href="https://icp.gov.moe/?keyword=20246351" target="_blank">萌ICP备20246351号</a>
    <div id="3">本站总访问量 <span id="busuanzi_value_site_pv" /> 次</div>
    <div id=‘2’>本站访客数 <span id="busuanzi_value_site_uv" /> 人次</div>

    <VCLiveTime mt="2" start-time="2023-12-12">
      <template #live-time-before>
        <span>本站已稳定运行</span>
      </template>
    </VCLiveTime>
  </YunFooter>
</template>
