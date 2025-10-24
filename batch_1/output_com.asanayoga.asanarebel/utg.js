var utg = 
{
  "nodes": [
    {
      "id": "e5b830376eabba6cfa39e5c61c5e9f34",
      "shape": "image",
      "image": "states\\screen_2025-05-18_113203.png",
      "label": "NexusLauncherActivity\n<FIRST>",
      "package": "com.google.android.apps.nexuslauncher",
      "activity": ".NexusLauncherActivity",
      "state_str": "e5b830376eabba6cfa39e5c61c5e9f34",
      "structure_str": "8b42954c929549ae4451cb28b19a47df",
      "title": "<table class=\"table\">\n<tr><th>package</th><td>com.google.android.apps.nexuslauncher</td></tr>\n<tr><th>activity</th><td>.NexusLauncherActivity</td></tr>\n<tr><th>state_str</th><td>e5b830376eabba6cfa39e5c61c5e9f34</td></tr>\n<tr><th>structure_str</th><td>8b42954c929549ae4451cb28b19a47df</td></tr>\n</table>",
      "content": "com.google.android.apps.nexuslauncher\n.NexusLauncherActivity\ne5b830376eabba6cfa39e5c61c5e9f34\nandroid:id/content,com.google.android.apps.nexuslauncher:id/search_container_workspace,com.google.android.apps.nexuslauncher:id/subtitle_text,com.google.android.apps.nexuslauncher:id/bc_smartspace_view,com.google.android.apps.nexuslauncher:id/clock,com.google.android.apps.nexuslauncher:id/scrim_view,com.google.android.apps.nexuslauncher:id/page_indicator,com.google.android.apps.nexuslauncher:id/mic_icon,com.google.android.apps.nexuslauncher:id/hotseat,com.google.android.apps.nexuslauncher:id/smartspace_card_pager,com.google.android.apps.nexuslauncher:id/launcher,com.google.android.apps.nexuslauncher:id/g_icon,com.google.android.apps.nexuslauncher:id/drag_layer,com.google.android.apps.nexuslauncher:id/workspace\nGmail,Messages,Photos,Chrome,Play Store,YouTube,Sun, May 18",
      "font": "14px Arial red"
    },
    {
      "id": "1e881d951cf9cbf79a4326c78a1c4931",
      "shape": "image",
      "image": "states\\screen_2025-05-18_113210.png",
      "label": "SplashScreenActivity\n<LAST>",
      "package": "com.asanayoga.asanarebel",
      "activity": ".splashscreen.SplashScreenActivity",
      "state_str": "1e881d951cf9cbf79a4326c78a1c4931",
      "structure_str": "d3f0bf75a60e2bbe7ee124a81cae9911",
      "title": "<table class=\"table\">\n<tr><th>package</th><td>com.asanayoga.asanarebel</td></tr>\n<tr><th>activity</th><td>.splashscreen.SplashScreenActivity</td></tr>\n<tr><th>state_str</th><td>1e881d951cf9cbf79a4326c78a1c4931</td></tr>\n<tr><th>structure_str</th><td>d3f0bf75a60e2bbe7ee124a81cae9911</td></tr>\n</table>",
      "content": "com.asanayoga.asanarebel\n.splashscreen.SplashScreenActivity\n1e881d951cf9cbf79a4326c78a1c4931\nandroid:id/content,com.asanayoga.asanarebel:id/action_bar_root,android:id/statusBarBackground,android:id/navigationBarBackground\n",
      "font": "14px Arial red"
    }
  ],
  "edges": [
    {
      "from": "e5b830376eabba6cfa39e5c61c5e9f34",
      "to": "1e881d951cf9cbf79a4326c78a1c4931",
      "id": "e5b830376eabba6cfa39e5c61c5e9f34-->1e881d951cf9cbf79a4326c78a1c4931",
      "title": "<table class=\"table\">\n<tr><th>3</th><td>IntentEvent(intent='am start com.asanayoga.asanarebel/com.asanayoga.asanarebel.splashscreen.SplashScreenActivity')</td></tr>\n</table>",
      "label": "3",
      "events": [
        {
          "event_str": "IntentEvent(intent='am start com.asanayoga.asanarebel/com.asanayoga.asanarebel.splashscreen.SplashScreenActivity')",
          "event_id": 3,
          "event_type": "intent",
          "view_images": []
        }
      ]
    },
    {
      "from": "1e881d951cf9cbf79a4326c78a1c4931",
      "to": "e5b830376eabba6cfa39e5c61c5e9f34",
      "id": "1e881d951cf9cbf79a4326c78a1c4931-->e5b830376eabba6cfa39e5c61c5e9f34",
      "title": "<table class=\"table\">\n<tr><th>2</th><td>KeyEvent(state=1e881d951cf9cbf79a4326c78a1c4931, name=BACK)</td></tr>\n<tr><th>3</th><td>IntentEvent(intent='am force-stop com.asanayoga.asanarebel')</td></tr>\n</table>",
      "label": "2, 3",
      "events": [
        {
          "event_str": "KeyEvent(state=1e881d951cf9cbf79a4326c78a1c4931, name=BACK)",
          "event_id": 2,
          "event_type": "key",
          "view_images": []
        },
        {
          "event_str": "IntentEvent(intent='am force-stop com.asanayoga.asanarebel')",
          "event_id": 3,
          "event_type": "intent",
          "view_images": []
        }
      ]
    }
  ],
  "num_nodes": 2,
  "num_edges": 2,
  "num_effective_events": 3,
  "num_reached_activities": 1,
  "test_date": "2025-05-18 11:31:48",
  "time_spent": 59.478803,
  "num_transitions": 8,
  "device_serial": "emulator-5554",
  "device_model_number": "sdk_gphone64_x86_64",
  "device_sdk_version": 31,
  "app_sha256": "a1157ca9e15ab4a2ab3a78ad35d2f6f6992bcd2a7e7b8b8ad6e9f0ad5585e977",
  "app_package": "com.asanayoga.asanarebel",
  "app_main_activity": "com.asanayoga.asanarebel.splashscreen.SplashScreenActivity",
  "app_num_total_activities": 75
}