export interface Tracker {
  title: string
  subtitle: string
  description: string
  href: string
  entries: number
  edges: number
  updated: string
}

const trackersData: Tracker[] = [
  {
    title: 'LLM 越狱',
    subtitle: 'Jailbreak',
    description:
      '对齐的模型能否在任何输入下都不交付被禁的能力。攻击者只需要一条输入奏效，防御者要封住整个语义等价类。',
    href: 'https://jb.c4a4d65b.xyz/',
    entries: 133,
    edges: 229,
    updated: '2026-08-24',
  },
  {
    title: 'LLM 提示注入',
    subtitle: 'Prompt Injection',
    description:
      '指令与数据走同一条通道。攻击侧几乎没有争议，争议全部集中在防御与评测——哪个防御真的有效。',
    href: 'https://pi.c4a4d65b.xyz/',
    entries: 98,
    edges: 208,
    updated: '2026-08-25',
  },
  {
    title: 'LLM Backdoor 检测',
    subtitle: 'Backdoor / Data Poisoning',
    description:
      '给你一堆权重，能否判断它被下过毒并说出触发条件。图像分类器上那套反演加离群检验的模板，到了自回归模型上前提已经塌掉。',
    href: 'https://bd.c4a4d65b.xyz/',
    entries: 121,
    edges: 195,
    updated: '2026-08-24',
  },
]

export default trackersData
