var e={app:{bedmesh:{label:{active:"aktiv",box_scale:"Skalierung",flat_surface:"Ebene anzeigen",mesh_matrix:"Mesh-Matrix",probed_matrix:"Testpunktmatrix",profile_name:"Profilname",remove_profile:"Profil %{name} löschen",scale:"Farbskala",wireframe:"Drahtmodell",base:"Basis"},msg:{hint:"Wird das Profil mit einem anderen Namen als %{name} gespeichert, kann ausgewählt werden das Profil %{name} zu löschen",not_found:"Keine Bett-Meshes gefunden.",not_loaded:"Kein Mesh geladen"},tooltip:{calibrate:"Neue Kalibrierung beginnen und Profil als 'default' speichern",delete:"Profil löschen",load:"Profil laden",save:"Fügt das Mesh Profil der printer.cfg hinzu",copy_image:"Bett-Mesh-Abbildung kopieren"}},chart:{label:{current:"Aktuell",item:"Element",power:"Leistung",target:"Ziel",rate_of_change:"Änderung"},tooltip:{help:"Halten Sie <kbd>Umschalt</kbd> gedrückt, um zu zoomen. <br />Klicken Sie auf ein Element, um es im Diagramm ein-/auszublenden. <br />Klicken Sie auf eine Leistung, um sie im Diagramm ein-/auszublenden."}},console:{label:{auto_scroll:"Automatisches Scrollen",flip_layout:"Layout umkehren",hide_temp_waits:"Temperaturbenachrichtigungen ausblenden"},placeholder:{command:"Tab für Autovervollständigung, 'help' für Befehle, Pfeiltasten für Verlauf"},tooltip:{help:'Geben Sie "help" für eine Befehlsliste ein<br />Benutzen Sie <kbd>Tab</kbd> für Autovervollständigung<br />Benutzen Sie <kbd>&uarr;</kbd> und <kbd>&darr;</kbd> für den Verlauf'}},endpoint:{error:{cant_connect:"Etwas ist schiefgelaufen und Fluidd kann die Adresse nicht erreichen. Sind Sie sicher, dass dies die richtige Adresse ist?",cors_error:"durch CORS-Richtlinie blockiert",cors_note:'Dies kann bedeuten, dass Sie Ihre Moonraker-Konfiguration ändern müssen. Bitte lesen Sie dazu die Dokumentation zur Einrichtung mehrerer Drucker <a href="%{url}" target="_blank">hier</a>'},hint:{add_printer:"z.B. http://fluiddpi.local"},msg:{trouble:'Haben Sie Schwierigkeiten? <a href="%{url}" target="_blank">Siehe hier</a> für weitere Informationen.'},tooltip:{endpoint_examples:"Geben Sie Ihre API-URL ein.<br />Zum Beispiel:<br /><blockquote>http://fluidd.local, http://192.168.1.150</blockquote>"}},endstop:{label:{open:"Offen",triggered:"Ausgelöst"},msg:{subtitle:'Verwenden Sie die Schaltfläche "Aktualisieren", um den Endschalter-Status zu aktualisieren.'}},file_system:{filters:{label:{print_start_time:"Nur ungedruckte",klipper_backup_files:"Klipper-Backupdateien ausblenden",rolled_log_files:"Alte Logdateien ausblenden",hidden_files_folders:"Versteckte Dateien und Ordner ausblenden",moonraker_backup_files:"Moonraker Backup-Dateien ausblenden",crowsnest_backup_files:"Crowsnest-Backupdateien ausblenden"}},label:{dir_name:"Ordnername",disk_usage:"Belegter Speicher",diskinfo:"Speicherinformationen",downloaded:"Heruntergeladen",file_name:"Dateiname",transfer_rate:"Transferrate",uploaded:"Hochgeladen",view_section_documentation:"Dokumentation für '%{section}' anzeigen"},msg:{not_found:"Keine Dateien gefunden",processing:"Verarbeiten"},overlay:{drag_files_folders_upload:"<strong>Ziehen</strong> Sie Dateien und Ordner zum Hochladen hierher",drag_files_enqueue:"<strong>Ziehen</strong> Sie Dateien hierher, um sie in die Warteschlange zu stellen"},title:{add_dir:"Ordner hinzufügen",add_file:"Datei hinzufügen",command_palette:"Befehlspalette",download_file:"Empfange Datei",rename_dir:"Ordner umbennen",rename_file:"Datei umbennen",upload_file:"Datei hochladen | Dateien hochladen",duplicate_dir:"Doppelter Ordner",duplicate_file:"Doppelte Datei",go_to_file:"Zur Datei gehen",devices:"Geräte"},tooltip:{low_on_space:"Wenig Speicherplatz auf der Festplatte",root_disabled:"{root} ist nicht verfügbar. Bitte überprüfen Sie Ihre Logdateien.",items_count:"{count} Element | {count} Elemente"},url:{klipper_config:"%{klipperDomain}/Config_Reference.html#%{hash}",moonraker_config:"https://moonraker.readthedocs.io/en/latest/configuration/#%{hash}",moonraker_telegram_bot_config:"https://github.com/nlef/moonraker-telegram-bot/wiki/Sample-config#%{hash}",crowsnest_config:"https://crowsnest.mainsail.xyz/configuration/%{hash}-section"}},gcode:{btn:{load_current_file:"Aktuelle Datei laden"},label:{current_layer_height:"Aktuelle Schichthöhe",exclude_object:"Objekt ausschließen",follow_progress:"Fortschritt folgen",layer:"Schicht",layers:"Schichten",parsed:"Verarbeitet",show_extrusions:"Extrusionen zeigen",show_moves:"Bewegungen zeigen",show_next_layer:"Nächste Schicht zeigen",show_previous_layer:"Vorherige Schicht zeigen",show_retractions:"Retracten zeigen",parsing_file:"Verarbeite Datei",show_current_layer:"Aktuelle Schicht anzeigen",show_parts:"Teile anzeigen"},msg:{confirm:'Die Datei "%{filename}" ist %{size} groß, dies kann sehr Ressourcenintensiv für Ihr System sein. Sind Sie sicher?'},overlay:{drag_file_load:"<strong>Ziehe</strong> eine Gcode-Datei hierher, um sie zu laden"}},general:{btn:{add:"Hinzufügen",add_dir:"Ordner hinzufügen",add_file:"Datei hinzufügen",add_printer:"Drucker hinzufügen",adjust_layout:"Dashboard-Layout anpassen",all:"Alle",calibrate:"Kalibrieren",cancel:"Abbrechen",clear_profile:"Profil zurücksetzen",close:"Schließen",config_reference:"Config Referenz",delete:"Löschen",download:"Herunterladen",edit:"Bearbeiten",exit_layout:"Layout-Modus verlassen",extrude:"Extrudieren",heaters_off:"Heizelemente aus",load_all:"Alle laden",more_information:"Mehr Informationen",pause:"Pause",preheat:"Vorheizen",presets:"Voreinstellungen",preview_gcode:"Gcode-Vorschau",print:"Drucken",quad_gantry_level:"QGL",reboot:"Neustarten",recover:"Retten",refresh:"Aktualisieren",remove:"Entfernen",remove_all:"Alle Entfernen",rename:"Umbenennen",reprint:"Druck wiederholen",reset_file:"Datei zurücksetzen",reset_layout:"Auf Standardlayout zurücksetzen",reset_default_layout:"Standardlayout zurücksetzen",restart_firmware:"Firmware Neustarten",restart_service:"%{service} neustarten",restart_service_klipper:"Klipper neustarten",restart_service_moonraker:"Moonraker neustarten",resume:"Fortfahren",retract:"Retracten",return_dashboard:"Zurück zum Dashboard",save:"Speichern",save_as:"Speichern als",save_restart:"Speichern & Neu starten",send:"Senden",set_color:"Farbe setzen",set_default_layout:"Als Standardlayout setzen",shutdown:"Herunterfahren",socket_reconnect:"Neu verbinden",socket_refresh:"Aktualisieren erzwingen",upload:"Hochladen",upload_print:"Hochladen & Drucken",view:"Ansicht",reset_stats:"Statistik zurücksetzen",snooze:"Schlummern",abort:"Abbrechen",accept:"Akzeptieren",adjusted:"Angepasst",auth_unsure:"Sie wissen nicht, warum dies angezeigt wird?",forgot_password:"Passwort vergessen?",login:"Einloggen",logout:"Ausloggen",save_config_and_restart:"Konfiguration speichern und neu starten",add_to_queue:"Zur Warteschlange hinzufügen",filter:"Filtern",go_to_file:"Zur Datei gehen",job_queue:"Job-Warteschlange",refresh_metadata:"Metadaten aktualisieren",reload:"Aktualisieren",thumbnail_size:"Vorschaugröße",upload_files:"Dateien hochladen",upload_folder:"Ordner hochladen",create_zip_archive:"ZIP-Archiv erstellen",duplicate:"Duplizieren",select_columns:"Spalten auswählen",retry:"Wiederholen",multiply:"Vermehren",copied:"Kopiert",copy:"Kopieren"},error:{app_setup_link:'Die Anforderungen für die Einrichtung von Fluidd finden Sie <a target="_blank" href="%{url}">hier.</a>',app_warnings_found:"%{appName}-Warnungen gefunden.",components_config:'Die Konfiguration des Moonraker-Plugins finden Sie <a target="_blank" href="%{url}">hier.</a>',failed_components:"Moonraker hat fehlerhafte Plugins, bitte überprüfen Sie Ihre Logs, aktualisieren Sie Ihre Konfiguration und starten Sie Moonraker neu."},label:{accel_to_decel:"Beschleunigen zu Bremsen",acceleration:"Beschleunigung",actual_time:"Wirklich",add_camera:"Kamera hinzufügen",add_filter:"Filter hinzufügen",add_preset:"Voreinstellingen hinzufügen",add_user:"Benutzer hinzufügen",alias:"Alias",api_key:"API-Schlüssel",api_url:"API-URL",apply_z_offset:"Z-Offset übernehmen und speichern",category:"Kategorie",change_password:"Passwort ändern",clear_all:"Alle schließen",color:"Farbe",confirm:"Bestätigen",current_password:"Aktuelles Passwort",disabled_while_printing:"Während Druck deaktiviert",edit_camera:"Kamera bearbeiten",edit_filter:"Filter bearbeiten",edit_preset:"Voreinstellungen bearbeiten",edit_user:"Benutzer bearbeiten",extrude_length:"Extrusionslänge",extrude_speed:"Extrusionsgeschwindigkeit",filament:"Filament",file:"Datei",finish_time:"Fertig um",flow:"Fluss",free:"frei",heaters_busy:"Der Drucker ist momentan beschäftigt. Das Ausschalten der Heizelemente könnte zu einem fehlgeschlagenen Druck führen.",high:"Höchste",host:"Host",layer:"Schicht",layout:"Layout",longest_job:"Längster Auftrag",low:"Niedrigste",manage_accounts:"Benutzer verwalten",m117:"M117",name:"Name",new_password:"Neues Passwort",no_notifications:"Keine Benachrichtigungen",off:"Aus",on:"An",password:"Passwort",power:"Leistung",printers:"Drucker",progress:"Fortschritt",requested_speed:"Geschw.",retract_length:"Retract-Länge",retract_speed:"Retract-Geschwindigkeit",save_as:"Speichern als",services:"Dienste",slicer:"Slicer",speed:"Geschwindigkeit",sqv:"Geschwindigkeit bei rechtwinkligen Ecken",total:"Gesamt",total_filament:"Insgesamt verbrauchtes Filament",total_filament_avg:"Durchschnitt pro Druck",total_jobs:"Druckaufträge insgesamt",total_print_time:"Druckzeit insgesamt",total_print_time_avg:"Durchschnitt pro Druck",total_time:"Gesamtzeit",total_time_avg:"Durchschnitt pro Druck",turn_device_on:"%{device} einschalten",turn_device_off:"%{device} ausschalten",uncategorized:"Unkategorisiert",unretract_extra_length:"Unretract-Extralänge",unretract_speed:"Unretract-Geschwindigkeit",unsaved_changes:"Ungespeicherte Änderungen",used:"gebraucht",velocity:"Geschwindigkeit",visible:"Sichtbar",z_offset:"Z-Offset",add_category:"Kategorie hinzufügen",edit_category:"Kategorie bearbeiten",file_time:"Datei",pressure_advance:"Pressure Advance",smooth_time:"Glättungszeit",current_user:"Aktueller Benutzer",moonraker:"Moonraker",username:"Benutzername",ldap:"LDAP",accepted_screws:"Akzeptierte Schrauben",auth_source:"Authentifizierungsquelle",partial_of_total:"%{partial} von %{total}",screw_index:"Schraubenindex",screw_name:"Schraubenname",screw_number:"Schraube %{index}",user_managed_source:"Benutzer durch %{source}-Authentifizierung verwaltet",numeric_prefix_sort:"Sortierung nach numerischem Präfix",pause_at_layer:"Pausieren bei Schicht",stepper_enabled:"Motor aktiv",command:"Befehl",default:"Standard",pause_at_next_layer:"Pausieren bei nächster Schicht",thumbnail_size:"Vorschaugröße",upload_and_print:"Hochladen und drucken",version_sort:"Versions-Sortierung",all:"Alle",pause_at_layer_number:"Pausieren bei Schicht-Nummer",synced_extruder:"Synchronisierte Extruder",cross:"Kreuz",bars:"Balken",range:"Distanz",circle:"Kreis",minimum_cruise_ratio:"Minimales Konstantfahrtverhältnis",compact:"Kompakt",unknown:"Unbekannt",stepper_driver:"%{name} Treiber"},msg:{password_changed:"Passwort geändert",wrong_password:"Ups, etwas ist schiefgelaufen. Ist Ihr Passwort korrekt?",bed_screws_adjust:"Klicken Sie auf <b>Angepasst</b>, wenn eine signifikante Anpassung an der aktuellen Schraube erforderlich ist. Klicken Sie andernfalls auf <b>Akzeptieren</b>, um fortzufahren.",welcome_back:"Willkommen zurück.<br>Melden Sie sich unten an, um mit Ihrem Drucker in Kontakt zu bleiben.",needs_refresh:"Neue Inhalte verfügbar, bitte klicken Sie den <b>Aktualisieren</b>-Button um zu aktualisieren.",offline_ready:"Fluidd ist jetzt bereit, offline zu arbeiten.",pending_configuration_sections_deleted:"Die folgenden Sektionen sind zur Löschung markiert",rolledover_logs:"Die folgenden Applikations-Protokolle wurden erneuert: %{applications}",fluidd_settings_backup_failed:"Konnte kein Backup der Fluidd-Einstellungen erstellen!",not_valid_fluidd_backup_file:"Keine gültige Fluidd-Backupdatei!",fluidd_settings_restore_failed:"Konnte das Backup der Fluidd-Einstellungen nicht wiederherstellen!"},simple_form:{error:{arrayofnums:"Nur Zahlen",exists:"Existiert bereits",invalid_expression:"Ungültiger Ausdruck",invalid_url:"Ungültige URL",max:"Max %{max}",min:"Min %{min}",min_or_0:"Min %{min} oder 0",password_username:"Kann nicht dem Nutzernamen entsprechen",required:"Erforderlich",invalid_aspect:"Ungültiges Verhältnis",invalid_number:"Ungültige Zahl",credentials:"Ungültige Anmeldeinformationen"},msg:{no_file_preview:"%{name} kann momentan nicht angezeigt werden.",confirm:"Sind Sie sicher?",confirm_delete:"Sind Sie sicher? Hierdurch wird das ausgewählte Element gelöscht. | Sind Sie sicher? Hierdurch werden die {count} ausgewählten Elemente gelöscht.",confirm_exclude_object:"Sind Sie sicher, dass Sie dieses Objekt vom Druck ausschließen wollen?",confirm_power_device_toggle:"Sind Sie sicher? Dies wird das Gerät ein- bzw. ausschalten.",confirm_reboot_host:"Sind Sie sicher? Das Host-System wird neu gestartet.",confirm_service_restart:"Möchten Sie den Dienst %{name} wirklich neu starten?",confirm_service_stop:"Möchten Sie den Dienst %{name} wirklich beenden?",confirm_shutdown_host:"Sind Sie sicher? Das Host-System wird heruntergefahren.",unsaved_changes:"Sie haben ungespeicherte Änderungen. Sind Sie sicher, dass Sie den Editor schließen möchten?",confirm_forcemove_toggle:"Sind Sie sicher? Dies kann Schäden am Drucker verursachen.",confirm_service_start:"Sind Sie sicher, dass Sie den %{name}-Dienst starten wollen?",confirm_cancel_print:"Sind Sie sicher, dass sie den Druck abbrechen wollen?",confirm_clear_mesh:"Der Drucker ist gerade beschäftigt. Sind Sie sicher, dass sie das Bett-Mesh leeren wollen?",confirm_load_bedmesh_profile:"Der Drucker ist gerade beschäftigt. Sind Sie sicher, dass Sie das Profil %{name} laden wollen?",confirm_emergency_stop:"Sind Sie sicher, dass sie den Drucker notausschalten wollen?",confirm_remove_user:"Sind Sie sicher, dass Sie den Benutzer %{username} entfernen wollen?"}},table:{header:{actions:"Aktionen",end_time:"Beendet",estimated_time:"Geschätzte Zeit",filament:"Filament",filament_used:"Filament verbraucht",filament_weight_total:"Filamentgewicht",first_layer_bed_temp:"Erste Schicht Bett-Temperatur",first_layer_extr_temp:"Erste Schicht Extruder-Temperatur",first_layer_height:"Erste Schichtöhe",height:"Höhe",last_printed:"Zuletzt gedruckt",layer_height:"Schichthöhe",modified:"Geändert",name:"Name",print_duration:"Druckdauer",size:"Größe",slicer:"Slicer",slicer_version:"Slicer-Version",start_time:"Gestartet",status:"Status",total_duration:"Gesamtdauer",chamber_temp:"Kammertemperatur",time_in_queue:"Zeit in Warteschlange",filament_name:"Filament-Name",filament_type:"Filament-Typ",nozzle_diameter:"Düsendurchmesser",time_added:"Hinzugefügt"}},title:{add_printer:"Drucker hinzufügen",bedmesh:"Bettnivellierung",bedmesh_controls:"Bettnivellierungs-Einstellungen",camera:"Kamera | Kameras",config_files:"Konfigurationsdateien",configure:"Konfiguration",console:"Konsole",diagnostics:"Diagnostik",endstops:"Endschalter",fans_outputs:"Lüfter & Ausgänge",gcode_preview:"Gcode-Vorschau",history:"Auftragsverlauf",home:"Dashboard",jobs:"Aufträge",limits:"Drucker-Limits",macros:"Makros",other_files:"Andere Dateien",retract:"Firmware-Retraction",runout_sensors:"Runout-Sensoren",settings:"Einstellungen",stats:"Statistik",system:"System",system_overview:"Systeminformationen",temperature:"Temperaturen",timelapse:"Zeitraffer",tool:"Druckkopf",tune:"Tune",pending_configuration_changes:"Ausstehende Konfigurationsänderungen",metrics_explorer:"Metrik-Explorer",not_found:"404 Nicht Gefunden",edit_chart:"Diagramm bearbeiten",add_chart:"Diagramm hinzufügen",job_queue:"Job-Warteschlange",rollover_logs:"Protokolle erneuern"},tooltip:{browse_metrics:"Verfügbare Metriken durchsuchen",estop:"NOT-AUS",managed_by_moonraker:"Verwaltet durch Ihre moonraker-Konfiguration",notifications:"Benachrichtigungen",reload_klipper:"Lädt die Klipper-Konfiguration neu.",reload_restart_klipper:"Lädt die Klipper-Konfiguration neu und startet die MCUs neu.",restart_klipper:"Starten den Klipper-Systemdienst neu.",run_collector:"Kollektor ausführen",rollover_logs:"Protokolle erneuern",file_browser_help:'Ziehen Sie Dateien und Ordner von außerhalb des Browsers hierhin, um sie hochzuladen<br>Verschieben Sie Dateien und Ordner, indem Sie sie in Unterordner oder ".." ziehen',file_browser_configuration_help:"Kopieren Sie Dateien und Ordner in die Konfigurationsdateien, indem Sie diese von hier nach dort ziehen"}},history:{msg:{confirm_jobs:"Sind Sie sicher? Dadurch werden alle Aufträge gelöscht.",confirm_stats:"Sind Sie sicher? Dadurch wird die Statistik gelöscht.",confirm:"Sind Sie sicher? Hierdurch werden alle Historien und Druckerstatistiken geleert"}},printer:{state:{busy:"Beschäftigt",cancelled:"Abgebrochen",complete:"Fertig",idle:"Untätig",loading:"Laden",paused:"Pausiert",printing:"Druckt",ready:"Bereit",standby:"Standby"},title:{printer_status:"Druckerstatus",stepper_driver_overheating:"Schrittmotor-Treiber '%{name}' überhitzt"},msg:{possible_print_failure:"Dies kann zu einem fehlgeschlagenen Druck führen"},url:{stepper_driver_overheating:"%{klipperDomain}/TMC_Drivers.html#tmc-reports-error-ot1overtemperror"}},setting:{btn:{add_camera:"Kamera hinzufügen",add_category:"Kategorie hinzufügen",add_filter:"Filter hinzufügen",add_thermal_preset:"Voreinstellungen hinzufügen",add_user:"Benutzer hinzufügen",reset:"Zurücksetzen",select_theme:"Farbschema auswählen",add_metric:"Metrik hinzufügen",backup:"Backup",restore:"Wiederherstellen"},camera_type_options:{iframe:"HTTP-Seite",mjpegadaptive:"Adaptives MJPEG",mjpegstream:"MJPEG Stream",video:"IP Camera",webrtc_camera_streamer:"WebRTC (camera-streamer)",hlsstream:"HLS-Stream",webrtc_go2rtc:"WebRTC (go2rtc)",webrtc_mediamtx:"WebRTC (MediaMTX)"},camera_rotate_options:{90:"90°",180:"180°",270:"270°",none:"Keine Drehung"},label:{all_off:"Alle aus",all_on:"Alle an",aspect_ratio:"Seitenverhältnis",aspect_ratio_format:"[Breite : Höhe]",auto_edit_extensions:"Erweiterungen, die automatisch im Bearbeitungsmodus geöffnet werden",auto_follow_on_file_load:"Fortschritt beim Laden einer Datei automatisch folgen",auto_load_on_print_start:"Datei bei Druckstart automatisch laden",auto_load_mobile_on_print_start:"Datei bei Druckstart auch auf mobilen Geräten laden",camera_flip_x:"Horizontal spiegeln",camera_flip_y:"Vertikal spiegeln",camera_rotate_by:"Rotieren um",camera_stream_type:"Art des Kamerastreams",confirm_dirty_editor_close:"Schließen des Editors mit ungespeicherten Änderungen bestätigen",confirm_on_estop:"Bestätigung bei Notaus anfordern",confirm_on_power_device_change:"Bestätigung bei Änderung eines Gerätestatus anfordern",contains:"Enthält",dark_mode:"Nachtmodus",force_move_toggle_warning:"Bestätigung bei Aktivierung von FORCE_MOVE anfordern",show_manual_probe_dialog_automatically:"Dialog für manuelles Probing automatisch anzeigen",default_extrude_length:"Standard Extrudierlänge",default_extrude_speed:"Standard Extrudiergeschwindigkeit",default_toolhead_move_length:"Standard Bewegungsdistanz des Druckkopfes",default_toolhead_xy_speed:"Standard Druckkopfgeschwindigkeit für XY",default_toolhead_z_speed:"Standard Druckkopfgeschwindigkeit für Z",draw_background:"Hintergrund anzeigen",enable:"Aktivieren",enable_diagnostics:"Diagnostik-Aufzeichnung aktivieren",enable_notifications:"Aktiviere Benachrichtigung",expression:"Ausdruck",extrusion_line_width:"Extrusionslinien-Dicke",filter:"Filter",flip_horizontal:"Horizontal spiegeln",flip_vertical:"Vertikal spiegeln",fps_target:"FPS Ziel",fps_idle_target:"FPS Ziel im Ruhezustand",gcode_coords:"GCode-Koordinaten verwenden",height:"Höhe",hide_single_part_bounding_box:"Bauteilrahmen bei Druck eines einzelnen Teils verstecken",invert_x_control:"X-Steuerung invertieren",invert_y_control:"Y-Steuerung invertieren",invert_z_control:"Z-Steuerung invertieren",language:"Anzeigesprache",move_line_width:"Bewegungslinien-Dicke",none:"Keines | Keine",power_toggle_in_top_nav:"Power-Schalter in Kopfleiste",primary_color:"Primärfarbe",printer_name:"Druckername",reset:"Einstellungen zurücksetzen",retraction_icon_size:"Retraction-Symbolgröße",show_animations:"Animationen anzeigen",show_barometric_pressure:"Luftdruck anzeigen",show_rate_of_change:"Temperatur-Änderungsrate anzeigen",show_relative_humidity:"Relative Luftfeuchtigkeit anzeigen",starts_with:"Beginnt mit",theme_preset:"Community-Voreinstellung",thermal_preset_gcode:"GCode",thermal_preset_name:"Name des Voreinstellungsprofils",toolhead_move_distances:"Bewegungsdistanzen des Druckkopfes",type:"Art",z_adjust_values:"Z-Werte anpassen",show_code_lens:"CodeLens anzeigen",show_save_config_and_restart:"Speichern & Neu starten Schaltfläche in der Navigationsleiste",icon:"Symbol",solid:"Durchgängig",title:"Titel",unit:"Einheit",camera_fullscreen_action:{title:"Vollbildaktion",rawstream:"Direkter Stream",embed:"Eingebettet"},last_result:"Letztes Ergebnis",show_bed_screws_adjust_dialog_automatically:"Dialog zum Anpassen der Bettschrauben automatisch anzeigen",show_legend:"Legende zeigen",max:"Maximum",metrics:"Metriken",min:"Minimum",name:"Name",optional:"Optional",right_y:"Rechte Y-Achse",save_and_restore_view_state:"Ansicht speichern und wiederherstellen",confirm_on_save_config_and_restart:"Vor dem Speichern und Neustart die ausstehenden Konfigurationsänderungen überprüfen",dashed:"Gestrichelt",fill_color:"Füllfarbe",fill_opacity:"Fülldeckkraft",left_y:"Linke Y-Achse",line_color:"Linienfarbe",line_style:"Linienstil",card:"Karte",collector:"Kollektor",dotted:"Gepunktet",axes:"Achsen",camera_url_snapshot:"Kamera-Snapshot-URL",camera_url_stream:"Kamera-Stream-URL",default_min_layer_height:"Standard minimum Schichthöhe",date_format:"Datumsformat",never:"Nie",show_upload_and_print:"Hochladen und Drucken-Button in der Kopfzeile anzeigen",show_gas_resistance:"Gas-Widerstand anzeigen",time_format:"Zeitformat",text_sort_order:"Reihenfolge der Textsortierung",to_browser_local_storage:"zum Browser-Lokalspeicher",to_browser_session_storage:"zum Browser-Sitzungsspeicher",toolhead_control_style:"Druckkopf-Steuerstil",toolhead_xy_move_distances:"Druckkopf-Bewegungsdistanzen für XY",toolhead_z_move_distances:"Druckkopf-Bewegungsdistanzen für Z",show_chart:"Diagramm anzeigen",sections_to_ignore_pending_configuration_changes:"Zu ignorierende Sektionen mit ausstehenden Konfigurationsänderungen",show_screws_tilt_adjust_dialog_automatically:"Dialog zum Anpassen der Bettneigung automatisch anzeigen",draw_origin:"Ursprung anzeigen",enable_xy_homing:"XY-Homing aktivieren",show_logo_on_background:"Logo auf dem Hintergrund anzeigen",print_in_progress_layout:"Druckfortschritt-Layout",print_eta_calculation:"Druckendzeit-Berechnung",print_progress_calculation:"Druckfortschritt-Berechnung",keyboard_shortcuts:"Tastenkürzel",fluidd_settings_in_moonraker_db:"Fluidd-Einstellungen in Moonraker-Datenbank"},timer_options:{duration:"Nur Dauer",filament:"Filament",file:"Datei",slicer:"Slicer",slicer_m73:"Slicer (M73)",absolute_file_position:"Absolute Dateiposition",relative_file_position:"Relative Dateiposition"},title:{authentication:"Authentifizierung",camera:"Kamera | Kameras",console:"Konsole",gcode_preview:"Gcode-Vorschau",general:"Allgemein",file_editor:"Datei-Editor",macros:"Makros",theme:"Farbschema",thermal_presets:"Temperatur-Voreinstellungen",tool:"Druckkopf",file_browser:"Dateibrowser"},tooltip:{gcode_coords:"GCode-Position anstelle der Toolhead-Position auf dem Dashboard anzeigen",show_manual_probe_dialog_automatically:"Öffnet automatisch einen Hilfsdialog, wenn ein manuelles Probe-Tool ausgeführt wird",show_bed_screws_adjust_dialog_automatically:"Öffnet automatisch einen Hilfsdialog, wenn das BED_SCREWS_ADJUST-Werkzeug ausgeführt wird",diagnostics_performance:"[BETA] Das Protokollieren von Diagnoseinformationen kann die Leistung beeinträchtigen",show_screws_tilt_adjust_dialog_automatically:"Öffnet automatisch einen Hilfsdialog, wenn das SCREWS_TILT_CALCULATE-Werkzeug ausgeführt wird",theme_disclaimer:"Diese Farbschemata enthalten Markennamen und Logos, die geistiges Eigentum ihrer jeweiligen Eigentümer sind.<br> Die Nutzung dieser Namen und Logos erfolgt mit Genehmigung dieser Marken.<br> Bitte beachten SIe jedoch, dass die Farbschemata nicht offiziell von diesen Marken gepflegt werden.<br> Alle Probleme oder Anfragen bezüglich dieser Schemata sollten an das Fluidd-Team gerichtet werden.<br> Die Verwendung der Markennamen und Logos dient ausschließlich zu dekorativen und ästhetischen Zwecken und stellt keine offizielle Verbindung zu den Firmen oder eine Billigung dieser dar.",average_calculation:"Wenn mehr als eine Option gewählt ist, wird ein Durchschnittswert berechnet",keyboard_shortcuts:"[BETA] Aktivieren Sie Kürzel und drücken Sie '?', um eine Liste aller Kürzel anzuzeigen"}},socket:{msg:{connecting:"Verbinde mit Moonraker...",no_connection:"Keine Moonraker-Verbindung. Bitte überprüfen Sie den Moonraker-Status und / oder aktualisieren Sie Moonraker."}},system_info:{label:{capacity:"Gesamtgröße",cpu_desc:"CPU-Beschreibung",distribution_codename:"Codename",distribution_like:"Distribution basiert auf",distribution_name:"Distribution",frequency:"Frequenz",hardware_desc:"Hardwarebeschreibung",hostname:"Hostname",klipper_load:"Klipper-Last",manufactured:"Hergestellt",manufacturer:"Hersteller",mcu_awake:"{mcu} Zeit im Wachzustand",mcu_bandwidth:"{mcu}-Bandbreite",mcu_information:"{mcu}-Informationen",mcu_load:"{mcu}-Last",micro_controller:"Mikrocontroller",model:"CPU-Modell",moonraker_load:"Moonraker-Last",processor_desc:"Prozessor",product_name:"Produktname",serial_number:"Seriennummer",system_load:"Systemlast",system_memory:"Systemspeicher",system_utilization:"Auslastung",total_memory:"Gesamtspeicherplatz",operating_system:"Betriebssystem",version:"Version",network:"Netzwerk",virtualization:"Virtualisierung",load:"Last",awake_time:"Wachzeit",memory_used:"Genutzter Speicher",constants:"Konstanten",last_stats:"Letzte Statistiken",devices:"Geräte"},msg:{no_devices_found:"Keine Geräte gefunden",no_devices_searched:"Nutzen Sie den Aktualisieren-Knopf, um nach Geräten zu suchen",canbus_warning:'Nur unzugewiesene CAN-Bus-Knoten werden erkannt.<br>Es ist empfohlen, nur ein unzugewiesenes Gerät an den CAN-Bus anzuschließen, um Kommunikationsprobleme zu vermeiden.<br>Mehr Informationen finden Sie <a target="_blank" href="https://moonraker.readthedocs.io/en/latest/web_api/#query-unassigned-canbus-uuids">hier.</a>'}},tool:{btn:{home_x:"X",home_y:"Y",home_all:"Alle"},tooltip:{absolute_positioning:"Absolute Positionierung",extruder_disabled:"Extruder deaktiviert, da unter der min_extrude_temp (%{min}<small>°C</small>)",home_xy:"Home XY",home_z:"Home Z",manual_probe:"Manuelles Probing",motors_off:"Motoren Aus",relative_positioning:"Relative Positionierung",tools:"Werkzeuge",select_tool:"Werkzeug %{tool} auswählen"},title:{bed_screws_adjust:"Bettschrauben einstellen",manual_probe:"Manuelles Probing",screws_tilt_adjust:"Bettneigung einstellen"},label:{stats_volumetric_flow:'Bei einer Extrusion mit %{extrudeSpeed} mm/s<span class="secondary--text"> sollte der Druckkopf einen</span> ungefähren volumetrischen Fluss von %{estimatedVolumetricFlow} mm³/s <span class="secondary--text">erreichen können</span>',stats_extruded_length:'Bei der Extrusion von %{extrudeLength} mm Filament bei %{extrudeFactor} % Fluss<span class="secondary--text"> wird eine</span> ungefähre Austrittslänge von %{estimatedExtrudedLength} mm extrudiert',stats_active_extruder:'<span class="secondary--text">Die aktive Extruderkonfiguration ist auf ein</span> %{filamentDiameter} mm Durchmesser Filament<span class="secondary--text">und</span> eine %{nozzleDiameter} mm Düse eingestellt',stats_max_speed:'<span class="secondary--text">Unter der Annahme einer </span> %{layerHeight} mm Schichthöhe <span class="secondary--text">liegt die</span> ungefähre Maximaldruckgeschwindigkeit bei %{estimatedMaxSpeed} mm/s'}},version:{btn:{check_for_updates:"Nach Aktualisierungen suchen",finish:"Beenden",update:"Aktualisieren",update_all:"Alles aktualisieren",view_versions:"Versionen anzeigen"},label:{commit_history:"Commit-Verlauf",commits_on:"Commits am",committed:"Committed",dirty:"VERUNREINIGT",invalid:"UNZULÄSSIG",os_packages:"Betriebssystem-Pakete",package_list:"Paketliste",up_to_date:"AKTUELL",updates_available:"Updates sind verfügbar",old_component_version:"Sie verwenden eine veraltete Version von %{name}, welche nicht alle Features von Fluidd unterstützt.<b>Aktualisieren Sie %{name} auf mindestens %{version}."},status:{finished:"Aktualisierung abgeschlossen",updating:"Aktualisieren..."},title:"Softwareaktualisierungen",tooltip:{commit_history:"Commit-Verlauf",dirty:"Deutet auf einen Fehler in Bezug auf das Git-Repository hin (z.B. detached head, not on master, invalid origin)",invalid:"Deutet auf lokale Änderungen im Git-Repository hin",packages:"Pakete",release_notes:"Veröffentlichungsnotizen"}},timelapse:{btn:{render:"Rendern",save_frames:"Bilder speichern"},error:{newframe:"Fehler beim Aufnehmen eines Zeitraffer-Bildes"},label:{frames:"%{frames} Bild | %{frames} Bilder",length:"Geschätzte Länge: %{length}",frame:"Bild | Bilder"},title:{timelapse_settings:"Zeitraffer-Einstellungen",timelapse_status:"Zeitraffer-Status",render_settings:"Render-Einstellungen"},setting:{enable:"Aktiviert",auto_render:"Automatisches Rendern",crf:"Constant Rate- Faktor",duplicatelastframe:"Letzte Bilder wiederholen",fw_retract:"Firmware-Retraction verwenden",gcode_verbose:"Verboser Gcode",mode:"Modus",mode_layermacro:"Schicht-Makro",mode_hyperlapse:"Hyperlapse",hyperlapse_cycle:"Hyperlapse-Intervall",output_framerate:"Ausgabe-Bildrate",park_retract_distance:"Retraction-Länge beim Parken",park_retract_speed:"Retraction-Geschw. beim Parken",park_extrude_distance:"Extrusionslänge beim Parken",park_extrude_speed:"Extrusionsgeschw. beim Parken",parkhead:"Druckkopf parken",park_time:"Parkdauer",park_travel_speed:"Park-Bewegungsgeschw.",park_custom_pos_x:"Parkposition X",park_custom_pos_y:"Parkposition Y",park_custom_pos_dz:"Parkposition Z-Hop",parkpos:{label:"Parkposition",custom:"Benutzerdefiniert",front_left:"Vorne links",front_right:"Vorne rechts",center:"Mitte",back_left:"Hinten links",back_right:"Hinten rechts",x_only:"Nur X bewegen",y_only:"Nur Y bewegen"},previewimage:"Vorschaubild erzeugen",saveframes:"Einzelbilder speichern",stream_delay_compensation:"Verzögerungs-Kompensation",targetlength:"Ziellänge",variable_fps:"Variable Bildrate",variable_fps_min:"Minimum Bildrate",variable_fps_max:"Maximum Bildrate"}},spoolman:{btn:{manage_spools:"Spulen verwalten",scan_code:"Code scannen",select:"Auswählen | Für {macro} auswählen"},title:{spool_selection:"Spulenauswahl | Spulenauswahl für {macro}",scan_spool:"Spule scannen",spoolman:"Spoolman"},label:{active_spool:"Aktive Spule",change_spool:"Spule wechseln",comment:"Kommentar",device_camera:"Gerät",filament_name:"Filament",first_used:"Zuerst genutzt",last_used:"Zuletzt genutzt",location:"Ort",lot_nr:"Charge",material:"Material",remaining_weight:"Verbleibend",vendor:"Hersteller",id:"ID",weight:"Gewicht",length:"Länge"},msg:{no_spool:"Sie haben keine Spule ausgewählt. Sind Sie sicher, dass Sie ohne Filament-Tracking drucken wollen?",no_filament:"Die Spule, die Sie ausgewählt haben, hat eventuell nicht genug verbleibendes Filament, um den Druckauftrag erfolgreich abzuschließen. Sind Sie sicher, dass Sie fortfahren wollen?",no_required_length:"Die benötigte Filamentmenge für die von Ihnen ausgewählte Datei ist unbekannt. Wollen Sie fortfahren?",mismatched_filament:"Das Material des ausgewählten Filaments stimmt nicht mit dem im Slicer ausgewählten Material überein. Sind Sie sicher, dass Sie fortfahren wollen?",tracking_inactive:"Filament-Tracking ist inaktiv. Bitte wählen Sie eine Spule aus um fortzufahren.",not_connected:"Spoolman-Server nicht verfügbar.",info:{howto:"Halten Sie den QR-Code der Spule in die Kamera. Dieses Fenster wird geschlossen, sobald eine Spule erkannt wurde."},warning:{code_not_recognized:"Dieser Code sieht nicht nach einem kompatiblen QR-Code aus.",invalid_spool_id:"Die Spulen-ID in diesem QR-Code ist ungültig."},error:{cors:"Es ist ein Fehler beim Abrufen des Kamerabilds aufgetreten. Bitte stellen Sie sicher, dass Ihr Kameraserver CORS-Zugriff erlaubt.",spool_not_existant:"Die von Ihnen gescannte Spule existiert nicht in der Datenbank.",no_image_data:"Es ist ein Fehler beim Abrufen des Kamerabilds aufgetreten. Bitte überprüfen Sie Ihre Kameraeinstellungen oder versuchen Sie, eine andere Kameraquelle zu verwenden."}},setting:{auto_open_qr_camera:"Kamera automatisch zur QR-Code- Erkennung öffnen",auto_select_spool_on_match:"Spulenauswahl bei QR-Code- Übereinstimmung automatisch übernehmen",prefer_device_camera:"Gerätekamera wenn verfügbar zur QR-Code- Erkennung verwenden",show_spool_selection_dialog_on_print_start:"Spulenauswahl-Dialog automatisch bei Druckstart anzeigen",warn_on_not_enough_filament:"Warnung anzeigen, wenn die Spule nicht genug Filament verbleibend hat, um den Druck abzuschließen",warn_on_filament_type_mismatch:"Warnung anzeigen, wenn der Filamenttyp der Spule nicht mit dem im Slicer ausgewählten übereinstimmt",remaining_filament_unit:"Verbleibendes Filament anzeigen als"}},job_queue:{msg:{confirm:"Sind Sie sicher? Hierdurch wird die gesamte Druckwarteschlange geleert"},title:{multiply_job:"Auftrag vermehren | Aufträge vermehren"},label:{number_of_copies:"Anzahl der Kopien"},tooltip:{help:"Fügen Sie Jobs der Warteschlange hinzu, indem Sie diese hierhin ziehen<br>Passen Sie die Reihenfolge der Warteschlange an, indem Sie die Jobs nach oben oder unten verschieben"}},sensors:{title:{sensors:"Sensoren"}},keyboard_shortcuts:{title:{keyboard_shortcuts:"Tastenkürzel"},label:{actions:"Aktionen",cancel:"Abbrechen",emergency_stop:"Not-Aus",home_all:"Alle homen",navigation:"Navigation",open_keyboard_shortcut_help:"Tastenkürzel-Hilfe öffnen",pause:"Pausieren",printing:"Drucken",tool:"Werkzeug"}}}};export{e as default};
