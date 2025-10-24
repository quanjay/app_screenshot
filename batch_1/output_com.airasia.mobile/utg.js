var utg = 
{
  "nodes": [
    {
      "id": "e5b830376eabba6cfa39e5c61c5e9f34",
      "shape": "image",
      "image": "states\\screen_2025-05-18_141148.png",
      "label": "NexusLauncherActivity\n<FIRST>\n<LAST>",
      "package": "com.google.android.apps.nexuslauncher",
      "activity": ".NexusLauncherActivity",
      "state_str": "e5b830376eabba6cfa39e5c61c5e9f34",
      "structure_str": "8b42954c929549ae4451cb28b19a47df",
      "title": "<table class=\"table\">\n<tr><th>package</th><td>com.google.android.apps.nexuslauncher</td></tr>\n<tr><th>activity</th><td>.NexusLauncherActivity</td></tr>\n<tr><th>state_str</th><td>e5b830376eabba6cfa39e5c61c5e9f34</td></tr>\n<tr><th>structure_str</th><td>8b42954c929549ae4451cb28b19a47df</td></tr>\n</table>",
      "content": "com.google.android.apps.nexuslauncher\n.NexusLauncherActivity\ne5b830376eabba6cfa39e5c61c5e9f34\ncom.google.android.apps.nexuslauncher:id/g_icon,com.google.android.apps.nexuslauncher:id/smartspace_card_pager,android:id/content,com.google.android.apps.nexuslauncher:id/clock,com.google.android.apps.nexuslauncher:id/launcher,com.google.android.apps.nexuslauncher:id/bc_smartspace_view,com.google.android.apps.nexuslauncher:id/subtitle_text,com.google.android.apps.nexuslauncher:id/page_indicator,com.google.android.apps.nexuslauncher:id/drag_layer,com.google.android.apps.nexuslauncher:id/search_container_workspace,com.google.android.apps.nexuslauncher:id/mic_icon,com.google.android.apps.nexuslauncher:id/scrim_view,com.google.android.apps.nexuslauncher:id/hotseat,com.google.android.apps.nexuslauncher:id/workspace\nPlay Store,YouTube,Gmail,Photos,Sun, May 18,Messages,Chrome",
      "font": "14px Arial red"
    },
    {
      "id": "ec8ff928123cf9f768924dbfe77b583f",
      "shape": "image",
      "image": "states\\screen_2025-05-18_141159.png",
      "label": "SplashScreenActivity",
      "package": "com.airasia.mobile",
      "activity": ".SplashScreenActivity",
      "state_str": "ec8ff928123cf9f768924dbfe77b583f",
      "structure_str": "9e437aa38986d294f74966a5af80eb8b",
      "title": "<table class=\"table\">\n<tr><th>package</th><td>com.airasia.mobile</td></tr>\n<tr><th>activity</th><td>.SplashScreenActivity</td></tr>\n<tr><th>state_str</th><td>ec8ff928123cf9f768924dbfe77b583f</td></tr>\n<tr><th>structure_str</th><td>9e437aa38986d294f74966a5af80eb8b</td></tr>\n</table>",
      "content": "com.airasia.mobile\n.SplashScreenActivity\nec8ff928123cf9f768924dbfe77b583f\ncom.airasia.mobile:id/scrollView,com.airasia.mobile:id/action_bar_root,android:id/message,android:id/button1,com.airasia.mobile:id/parentPanel,com.airasia.mobile:id/contentPanel,com.airasia.mobile:id/textSpacerNoTitle,android:id/content,com.airasia.mobile:id/buttonPanel\nPlease use real device!,OK"
    }
  ],
  "edges": [
    {
      "from": "e5b830376eabba6cfa39e5c61c5e9f34",
      "to": "ec8ff928123cf9f768924dbfe77b583f",
      "id": "e5b830376eabba6cfa39e5c61c5e9f34-->ec8ff928123cf9f768924dbfe77b583f",
      "title": "<table class=\"table\">\n<tr><th>1</th><td>LongTouchEvent(state=e5b830376eabba6cfa39e5c61c5e9f34, view=dc9dea82bddd5324723dacd8afe569eb(SplashScreenActivity/TextView-Play Store))</td></tr>\n<tr><th>4</th><td>IntentEvent(intent='am start com.airasia.mobile/com.airasia.mobile.SplashScreenActivity')</td></tr>\n</table>",
      "label": "1, 4",
      "events": [
        {
          "event_str": "LongTouchEvent(state=e5b830376eabba6cfa39e5c61c5e9f34, view=dc9dea82bddd5324723dacd8afe569eb(SplashScreenActivity/TextView-Play Store))",
          "event_id": 1,
          "event_type": "long_touch",
          "view_images": [
            "views/view_dc9dea82bddd5324723dacd8afe569eb.png"
          ]
        },
        {
          "event_str": "IntentEvent(intent='am start com.airasia.mobile/com.airasia.mobile.SplashScreenActivity')",
          "event_id": 4,
          "event_type": "intent",
          "view_images": []
        }
      ]
    },
    {
      "from": "ec8ff928123cf9f768924dbfe77b583f",
      "to": "e5b830376eabba6cfa39e5c61c5e9f34",
      "id": "ec8ff928123cf9f768924dbfe77b583f-->e5b830376eabba6cfa39e5c61c5e9f34",
      "title": "<table class=\"table\">\n<tr><th>2</th><td>TouchEvent(state=ec8ff928123cf9f768924dbfe77b583f, view=9bdd82d47b33d09c632dfc9dd2f3f135(SplashScreenActivity/View-))</td></tr>\n<tr><th>4</th><td>KeyEvent(state=ec8ff928123cf9f768924dbfe77b583f, name=BACK)</td></tr>\n<tr><th>5</th><td>TouchEvent(state=ec8ff928123cf9f768924dbfe77b583f, view=2c8b8a86e7b5314c518889dd545ca622(SplashScreenActivity/Button-OK))</td></tr>\n</table>",
      "label": "2, 4, 5",
      "events": [
        {
          "event_str": "TouchEvent(state=ec8ff928123cf9f768924dbfe77b583f, view=9bdd82d47b33d09c632dfc9dd2f3f135(SplashScreenActivity/View-))",
          "event_id": 2,
          "event_type": "touch",
          "view_images": [
            "views/view_9bdd82d47b33d09c632dfc9dd2f3f135.png"
          ]
        },
        {
          "event_str": "KeyEvent(state=ec8ff928123cf9f768924dbfe77b583f, name=BACK)",
          "event_id": 4,
          "event_type": "key",
          "view_images": []
        },
        {
          "event_str": "TouchEvent(state=ec8ff928123cf9f768924dbfe77b583f, view=2c8b8a86e7b5314c518889dd545ca622(SplashScreenActivity/Button-OK))",
          "event_id": 5,
          "event_type": "touch",
          "view_images": [
            "views/view_2c8b8a86e7b5314c518889dd545ca622.png"
          ]
        }
      ]
    }
  ],
  "num_nodes": 2,
  "num_edges": 2,
  "num_effective_events": 5,
  "num_reached_activities": 1,
  "test_date": "2025-05-18 14:11:22",
  "time_spent": 78.629783,
  "num_transitions": 9,
  "device_serial": "emulator-5554",
  "device_model_number": "sdk_gphone64_x86_64",
  "device_sdk_version": 31,
  "app_sha256": "ac1c47d2f1455f7ce63b0d0921a9cda893424d6c17330b0cd1ae7c9151aa4ae9",
  "app_package": "com.airasia.mobile",
  "app_main_activity": "com.airasia.mobile.SplashScreenActivity",
  "app_num_total_activities": 76
}