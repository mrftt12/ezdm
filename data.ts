import type { Track, Album, Playlist, BrowseCategory } from './types';

export const tracks: Track[] = [
  { id: 't1', title: 'Electric Pulse', artist: 'DJ Nova', duration: '2:23', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC28wZqK7gKglrrzXrF3MpVT0gBlVhFWPfNamaSVZM8whQ-V6w9ZqsM1AxKjpvaxDFTQM9gRQu1Ocr8CE_AvNsFGmjXogDTdM6P6FGkTtX8uAqh0JaOD1gM82mLZtb35loYBPCkLAKJ6hUon3NmWNEDzkwA7pr2MhBQs6J4hJVtChIwystgJEZnaZ48GVhyzmW-o0VQ9GXH6-IcW_Pg-yqpMJkMGfMF6IQsV7JRvSME7GN4hi-1XDQt115uJVQ8eqo0Fris9K7wgCZv', url: 'https://storage.googleapis.com/vike-dev/demo.mp3' },
  { id: 't2', title: 'Synthwave Dreams', artist: 'Vector Seven', duration: '4:12', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWnPzmNgRuMR6QVBtJzOe0B6mRLgBo-Aftd_CHrpgdLgIzOvrvwOy9pAFXrkUnSp4EAr5C0ttUTQKCN3wDawmwpabK7-mL1xRT-_HGtOqo7Ge8YoChU1ZwHg-7uKcf-SFbuvV1y6LF-aSNlOJgfEBWT3Rbw_PlgtvLMWmrgLpePSYCoGBs_ROpvuY19PwgktW0SqCfsTnkZeZJaBvsYna9UeJ7SsMEGxR412RqylMl8Vfni9cMBTUOk4aLjq0qL7BJ1Uv_ujBV-a2i', url: 'https://storage.googleapis.com/vike-dev/demo.mp3' },
  { id: 't3', title: 'Future Funk', artist: 'Groovemaster', duration: '3:30', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFNpzzQ93xemwesVA27AO5ayKwBA_DAvIHS0IKE6THQyXxJeudWE2hQw0EeFGif1DOda4vfOY9Exm2631-XmjIJipmTQ1KPw5eBcPggnZpD9xEIvDs6FUBaeAsH7sm4u9SwOeWy7k4x4Uko2Eau7Sg9u5yjdpsHso0HKQitqcaMxbFocg4aFDl5GHbEb1mn_r4gpsnuyRmS3CE6du1ewKzyi_CWcGMcDv_28ip7Jxpa053xrMWkXwdDLXrSz8eg8G0PYAbOaZrTNrD', url: 'https://storage.googleapis.com/vike-dev/demo.mp3' }
];

const deadmau5Artwork = 'https://cdn.edmliveset.com/wp-content/uploads/elementor/thumbs/Tomorrowland-2025-r8y6t6uv5fwdo6x63rn6a8yhxg1a17sdo3jgzy37mk.webp';

const deadmau5TomorrowlandTracks: Track[] = [
  {
    id: 't-dm-tmrw-25',
    title: 'Live at Tomorrowland 2025',
    artist: 'deadmau5',
    duration: '58:34',
    artwork: deadmau5Artwork,
    url: 'https://stream79.hearthis.at/index.php?track=setss/deadmau5-live-at-t0m0rr0wland-2025-w2-day-3-freedom-stage&secret=pOBIt'
  },
];

tracks.push(...deadmau5TomorrowlandTracks);

const deadmau5TomorrowlandAlbum: Album = {
  id: 'a4',
  title: 'Live at Tomorrowland 2025',
  artist: 'deadmau5',
  artwork: deadmau5Artwork,
  tracks: deadmau5TomorrowlandTracks,
};

export const trendingNow: Album[] = [
  deadmau5TomorrowlandAlbum,
  { id: 'a1', title: 'Electric Pulse', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWnPzmNgRuMR6QVBtJzOe0B6mRLgBo-Aftd_CHrpgdLgIzOvrvwOy9pAFXrkUnSp4EAr5C0ttUTQKCN3wDawmwpabK7-mL1xRT-_HGtOqo7Ge8YoChU1ZwHg-7uKcf-SFbuvV1y6LF-aSNlOJgfEBWT3Rbw_PlgtvLMWmrgLpePSYCoGBs_ROpvuY19PwgktW0SqCfsTnkZeZJaBvsYna9UeJ7SsMEGxR412RqylMl8Vfni9cMBTUOk4aLjq0qL7BJ1Uv_ujBV-a2i', tracks: [tracks[0], tracks[1]] },
  { id: 'a2', title: 'Rhythmic Revolution', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFNpzzQ93xemwesVA27AO5ayKwBA_DAvIHS0IKE6THQyXxJeudWE2hQw0EeFGif1DOda4vfOY9Exm2631-XmjIJipmTQ1KPw5eBcPggnZpD9xEIvDs6FUBaeAsH7sm4u9SwOeWy7k4x4Uko2Eau7Sg9u5yjdpsHso0HKQitqcaMxbFocg4aFDl5GHbEb1mn_r4gpsnuyRmS3CE6du1ewKzyi_CWcGMcDv_28ip7Jxpa053xrMWkXwdDLXrSz8eg8G0PYAbOaZrTNrD', tracks: [tracks[2]] },
  { id: 'a3', title: 'Sonic Boom', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr6Dd63u_s9kuovdvn2s7UA4iyVjheD3z_gy4l_o69bK97anG_kVIXZ667VkAj9uCxCQeY-UCqCMOsvoC02BAfDv635w5ggamzVVhOiOKIAZIA1Z-SvQQZLTs2ps2HxX768zWScJbxsMc9Bq6hKLle3RmBlYYnRazSJCBAcbye7xpvK24QbrT20dr7WHcBCwT-BpsJ9Es5-a0fPASVR4irtRGGk6KL92UkAOiE_crpy-HN95eSDiJkPPQlXCrx86niMeiekxNa-gm7', tracks: [tracks[0]] },
];

export const madeForYou: Album[] = [
    { id: 'mfy1', title: 'Electro Mix', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkRToPhSxtY8enhDeJuCpnh_lX7Y9MRtAlQwNtxNw-kqjU2Oc-7XmvGwQTTv00BtSxWhavCORtHpj_FRM9BkzgXeNvhGGcAPv1p_-R75AIPxE6vxUjDfF3yQ9ugyEHv1mAVScsJP3lcx18Msk9Rt450jttOC5rFctjah-iFdxn0j-oG05oS9a51FLyOcoWS8-3odvGlQvm2tGDxPntrC2Kt0R6FClCPjbpp-SrSqxejI8xZK43-hzbXng75u6CgcxXUtDAu8urt571', tracks: [tracks[1]] },
    { id: 'mfy2', title: 'Techno Beats', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTf0eBVknAEUmyiSVuSJ8WB0-EDC-QxiQxsJMnfL6gK7Mb2LiMDYG6eCoE5dfq0OfwqqPvsFyO7sO49wZeWsGFiuFoDbgu4Ft1kAjEP2WFkxn2qXAJ2ss5rve8p_EMbqB3xuvJPz_7GnBgVBuvior4V18Q0FNU_eaFvMBmlbu36S69YkUMhAj8KmwoEdTbN4k-A_hT460yi4CXs54vlUoScBKtHhrm337GROGxH6MGejjdzqkxZFKsa89zTpnT37WFZyUc-Q_YBjNa', tracks: [tracks[0]] },
    { id: 'mfy3', title: 'Trance Journey', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADgZpQShh4dN4G1wbuVWwdU7t0eVgeXsUJ2CaC3KO79G32p-42S3azs_F_G5memolOA0GJCFOA0ge3r0fkqXhlBnsLPyW5sryVSSpleWokUI5Mo1PxQ2PuoboIyITSbIll5auGPmp2jFaq7yfH6oUhXkB3UlbPmkRZY8Akjyz1nXX9MTdzGIY9RjBbcQZFoOmKpuCMQLLQlND0PM_26C8PDO2EkuaomiJVhB9JzEYcjsbN15pDO--EKavqspXrbCmtdmTtdhwcTt3o', tracks: [tracks[2]] },
];

export const newReleases: Album[] = [
    { id: 'nr1', title: 'Neon Nights', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ0HsbdYmJ6y-Nk4kZpNk9Z63IEjvW6aHZ4OGM_kZ3YQLl4EjUpQRt5VC2rswoFSHDlnGKxe5Pdmw33eCbCYGmXpBDLjEEpF1zWn_4OGWb16xPd82FI6LHUVzo5WSelnJBdpR9nWHRlbo9JXxR65sfAsouvlunSPbz05-YbqOs7BMbO0chxGf20KTqZNP80ZdzQyP4qp8XXdzwz224FWqVKUblO-Wy4Drn8ylGvstio9Ng8Yhk34N567KxHO4VHZ5KvyUqhQH28dBC', tracks: [tracks[0]] },
    { id: 'nr2', title: 'Digital Dreamscape', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhnyFlxfRaWglFpwO7hewqDqHywklgY1cW3j0hGfmqjO9VRQmID6o5u9Q5AEPzIF_rtOwVFeQ1ssZSTuw1mHGFZd8EvXA78jXoWtWaAzRYFhZzpwM9i3uJ4bdqHxBHnQ1kUEA8B0PY4TWWw46TXLZFmaph_DOBMp8d3koAMWui-X9P-3RIoSwSNg1xu41PqTSKIoGB2h1n3HXhm_xriksOwIIHmkDh2Et9XmzyqIgzcm1IvGwUrZk5tEH75SdVHOgZedWl-mIMnrBH', tracks: [tracks[1]] },
    { id: 'nr3', title: 'Bassline Bliss', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGfrfgqNAc-s7RGKVefYYMcetULHq4mq1J8JmnqXZWSQkzzVR5LA52c4wdRwzI4UysSVjqjEJghKnBfWt0eB6Lswg-B_TuT955wl2PYrscVlXjBWMQGb5nGHOSW_XM58XhAjS_hOTjIuTQx35Lxgve-vhhte_zTqAOeylFvxUmF1ee96AM3M1TTaKWVzE2JBBFDU0Q9wLdGs3vqnVoAD7bUqH69AeqgQdu5clTmnUiinXQZJGpeaCufHyLIUBo6hz_b3_WRLPtcikD', tracks: [tracks[2]] },
];

export const libraryPlaylists: Playlist[] = [
    { id: 'lp1', name: 'Liked Songs', description: '483 Tracks', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxeLOhZdgCNSs6oqKHNWXl0rfQroLBYpGfr_a-R1mpDNSG1gVzPzZ0o8E83VcS2mQmX3wAo3fS9jkAve0fHACYUudQNWpp8vmy_NFgO4fh9GJpRXZQTFUX8CNOiO5lNyLaPj8WowNdGkzB05MfpPhnpXWW5DVKmza0ew0cAERG1KPcR7uWbpdphtmP_cN9940SvujqsKs5aAaN26LucFHTt7LsbUGrF6JK-ryTE2RxDgXK5bFRmuZ5Wjb4Nw2U_5vTQtXkwRg55RBt' },
    { id: 'lp2', name: 'New Episodes', description: 'Updated 2 days ago', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt4rLLpmlhWfpcqVTh7RbPuZn1ewLZsoL4h6F2V2yevM0zSfgA-gXMltZel-GcsWfHQc6t2OwWiRjrnFg3Q5ahpTOOL5GEbMTBwLz4IUTpzENIUY5-4p2J1aE6KYW1M4zXXABL7Yd3ZDI4jIuOyI-dfa2GsT3E3VaZlPjVuPuKWxk_FZq8ywLnIwo-tAQirc2EBJjxi9Ue6AOfBRPqsL63xrF7fVhY2oilqZbh1BguTLvDM7yUkW9MMrgOIlVaoJbGhQxM55TE_uS0' },
    { id: 'lp3', name: 'Electric Dreams', description: 'Playlist · Alex Turner', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlLd9f-0QVBrcPQEoX1G8hkLhSLskIVvgp3jrFlF1U4xXRCx-VaVIGP4jGmnQXl-0BtTw_588vn_LJN4tBVhOWXlBnPqWSye_MAk7JYg-Sj127PU5etmBf-5FgVKKwkv9KSZdappVMikSIXi-acafUZ1zzrakcGmXOe7d2smSssijQtVj0bziBchgy2GLkrHbDIyBlVy3YkZvBkTnzcNa35qMcmEHILzw4cGANo691VU9MoQJ10JHsWfDeuRhhqcKs6Ju3VrI2_6oX' },
    { id: 'lp4', name: 'Top Tracks 2022', description: 'Playlist', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD07iZWdpuCrr8Zw-ApIdwQH5whgBJ8hsdBFFLPhbfkdYU_weT5v3ZbIv2Xci-PKww_TlgLnlmTTUo9dkr0_wAh4svL5BSssFHmHoLeETdCWIntMWKN-7PpC9mfkeEh1VFTTrCaDV3DJxjYXOKlwof7Sdz7qDpa0qAoAviQrQf1QHdnykpVFSuzTgTQ8s-1uIJnc-ZNlDUaeFxfwQnuHRGjtracWmKumj2imQQ5v6x47XSFAMLJBEbDRSN9dzCxYttdZ55_VQl1RRuA' },
    { id: 'lp5', name: 'Chill Beats', description: 'Playlist', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY08b5YP7bK0N3kVpfV59Cbi3TBhz3Oa7rnvS1w2q5LTYdGP-1B5E2OcScEm9Vpdeb55LZIAZsBgHI5MI234SNe0IFdq6N-DGGt4EzmNRUzVsHQkqVQPBiTKWRYEe0SInSPgZq7FAjFLDQtW_W-DKFm50Wyapu8GBlUwSgT-pkQkWXVSs-oGy3T-flNq78OyiykFgp2EvbH5uaJktqbjG5f4huSWiMUS9-xZehVeO9PmPSe9WP2SoAg3tKyYuUW--LfXga_1usEpYD' },
    { id: 'lp6', name: 'Night Drive', description: 'Playlist · Ethan Blake', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBx-FsioRLmAOSkV9oJsaflvQG7kG9zAveTZ4I0LSTlyX1AGtTLqKZ9Q8_3ldBrUP1_in-ePJ_Mp9FU9AGMwalbntddjl4ARK1jPcWvfxynEzJKatFcjNUiOrd7YM6ahDlgW6IwJRhJcey-n_nHAt-x_0E-S349L80ZU0tYyCCffh_00iyWBKwekamUzweLxfPhiCBQDjdES6eQrfa1Y0CajWquYSPX7Kl39oy2eOcLfHt60AZFndor1_4bI421aAPxp-WXfvXMAKt' },
];

export const trendingSearches: string[] = ['Techno', 'House', 'Trance', 'Dubstep', 'Drum & Bass'];

export const browseCategories: BrowseCategory[] = [
    { id: 'bc1', name: 'Festival Anthems', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbXMZee4aXCne-gnS3sLGXRMGhgFlI-CK7KVMAPK17IdoJP4FjLgUGYfP8O6iMgjo99xnvL5HDm-2IC0W3oxAy8uRLtkRvCllBJyg563n0shC7vTEVz6nzawWe3Q_ghzIZOAR69nQulZE1nLKZtA9f8LMw04SQUtB8tsvduoHDxCOUdBevGcCz87I0yToOAo9glmQJkA5HY8fs5kcHNZ-W9lyOQXW4myePQA_lgPDWdPWRfvLcBisYM241SSQhnQmbP5GfwPOcZ6w0' },
    { id: 'bc2', name: 'Deep House Grooves', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWWwFxDgPtlDjd4HBwIF9NYunOKjyJO2HBX2GRsMGo7bYb0UhxVLNHgbhW3YPPoObkAV4ujmZ-y9btavsx1UThK2yOP_slP0nePAnejM_rHtGivoiYOAzRM80Tz3ZD86U-2ZF8oYO6ZqgoSvVFYL3ZMv3fpi4NXoUD43lPDPqVBpkN05DIxjoxhMseB6SMsAIO9erW56t0syVeHu024SHay8M6vDEyZ9LMjuRu2n7Uh9QBe5yUGhQ2y2yGvcokrh4hkgXP1v-eSWya' },
    { id: 'bc3', name: 'Progressive Journeys', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClMYfQnvTlV5DPC2AgRWr9CsrfKAjFjK39dvlZTVPfpF6j26YhnSfAj8SaHOh5POizBHOZgsj5bxpmpMBtpJKGr1YAA4UZ9AuztuDObN1QUsDEsOY0fJabEsT3JZTfgUtG0LopZUKspZhgw0yHNHxY8s_y0r1A-bl9Jo-KVuJzSZ1Jf5BnZAhs-DWOKtvEbJPnu3lslEkiLC_YwWBBeqCtzldor7_VMF0h3PdZSbWK2O-XUFieNQ7hNasfI7vgnPaclLN95f044WPS' },
    { id: 'bc4', name: 'Hardstyle Mayhem', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUIQ-3OvTbyyYAqq2xgtKx3MzP_7GtniVOShhVGPu6w8frsDBVVTZte0chHpzfdOAgSRdxngEQSmbz12fUftkmlCjbYgfsSQE3VHppzEqWuoS9bgAM0yFiZRVoPG4DYttreihmzwiMvuHAHLscWXcdZpBhRalW_HLBwvkMMl1FF_HzHKZIyqXzJGCwFH9Hr81b4DZbQNxBIlNJvPUx-Oz4STBrlVYi4kcjMYbsRyLoBnLQOMvYRQfEowHo4IEbKnGLQAgPsMjxCgcs' },
    { id: 'bc5', name: 'Ambient Soundscapes', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa6B2JUrkWuK-9tJR-sDXsHdiSw6ph0osRP0_6fsC392zZGTVgPCE58n5qBM5V82rLxaOolsoKbFBgqoq7C1AdoSczQqrU4uioIOp_IfBkuTjB4VCxPyp80pm93GIpDDB-jhdZoKpbZuLwBDdK0nkKjHmZfi7_fKKdGLQ4O1jHa7ksnMFG2lYd9npTcSyPQ46eTqwryqme73b4qltUWtGapOUlowXv2LKpT45Vc6vzWLPsx9By-whRy3rK00X7iaxtXgu-gi_yH4IO' },
    { id: 'bc6', name: 'Industrial Beats', artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6OO3Es-3J9F0g4qbUBcGKv9GO3GKadgjLFqHjCZvbZjGF15_pu7ny_bRziNEx_CAAMz2o6cgzlV-QyTFxzQZnN58ppLsckc8taBZcntY4TRwMdcqa8lGDeqhtEXgQUvWBAr-PrKic7Gl3gaIk1eKCxeC-s8nY9dbmmn5j2DT3U6XxWMhsP9ipkBMpo6pIj93-eBCodTIs2uQCglTl1QXxup27dyB3dZu80EVvAptlej2f09ewny_bnrfsZQ84pyLCMiNHDmZ-y4L4' },
];