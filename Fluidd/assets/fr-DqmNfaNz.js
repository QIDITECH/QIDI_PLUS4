var e={app:{bedmesh:{label:{box_scale:"Amplifier la visualisation",flat_surface:"Montrer un plan plat",mesh_matrix:"Matrice interpolée",probed_matrix:"Matrice réelle",profile_name:"Nom du profil",remove_profile:"Supprimer le profile %{name}",scale:"Échelle au min / max",wireframe:"Armature",active:"actif",base:"base"},msg:{hint:"Si vous enregistrez sous un nom autre que %{name}, vous pouvez choisir de supprimer également le profil %{name}",not_found:"Aucune maille de lit existante n'a été trouvée.",not_loaded:"Pas de bed mesh chargé"},tooltip:{calibrate:"Démarrer une nouvelle calibration, le profil sera sauvegardé sous le nom 'default'",delete:"Supprime le profil",load:"Charger le profil",save:"Enregistrer le profil calibré dans 'printer.cfg'",copy_image:"Copier l'image du bed mesh"}},chart:{label:{current:"Courant",item:"Élément",power:"Puissance",target:"Cible",rate_of_change:"Changement"},tooltip:{help:"Maintenez <kbd>Shift</kbd> pour zoomer.<br />Cliquez sur un élément pour l'afficher .<br />Cliquez sur une puissance pour l'afficher ."}},console:{label:{auto_scroll:"Scroll auto",hide_temp_waits:"Cacher les messages de température",flip_layout:"Inverser disposition"},placeholder:{command:"'tab' pour l'autocomplete, 'help' pour les commandes, les flêches pour l'historique"},tooltip:{help:`Saisir "help" pour les commandes<br />Utiliser <kbd>Tab</kbd> pour l'autocomplétion<br />Utiliser <kbd>&uarr;</kbd> et <kbd>&darr;</kbd> pour l'historique`}},endpoint:{error:{cant_connect:"Une erreur s'est produite et fluidd ne peut pas communiquer . Êtes-vous sûr(e) qu'il s'agisse de la bonne adresse ?",cors_error:"blocké par la configuration CORS",cors_note:'Cela peut signifier que vous devez modifier la configuration de votre moonraker. Veuillez consulter la documentation sur les configurations multi-imprimantes <a href="%{url}" target="_blank">ici</a>'},hint:{add_printer:"Ex : http://fluiddpi.local"},msg:{trouble:`Un souci ? <a href="%{url}" target="_blank">Cliquez ici</a> pour plus d'informations.`},tooltip:{endpoint_examples:"Saissizez l'URL de l'API .<br />Par exemple;<br /><blockquote>http://fluidd.local, http://192.168.1.150</blockquote>"}},endstop:{label:{open:"OUVERT",triggered:"ACTIF"},msg:{subtitle:"Utilisez le bouton d'actualisation pour mettre à jour l'état de l'arrêt final."}},file_system:{filters:{label:{print_start_time:"Filtrer les impressions passées",moonraker_backup_files:"Filtrer les fichiers de sauvegarde Moonraker",klipper_backup_files:"Filtrer les fichiers de sauvegardes Klipper",rolled_log_files:"Filtrer les fichiers log rotatifs",crowsnest_backup_files:"Filtrer les fichiers de sauvegarde de Crowsnest",hidden_files_folders:"Filtrer les fichiers et dossiers cachés"}},label:{dir_name:"Nom du dossier",disk_usage:"Utilisation du disque",diskinfo:"Informations sur le disque",downloaded:"Téléchargé",file_name:"Nom du fichier",transfer_rate:"Vitesse de transfert",uploaded:"Téléchargé",view_section_documentation:"Voir la documentation : '%{section}'"},msg:{not_found:"Aucun fichier trouvé",processing:"Traitement en cours"},title:{add_dir:"Ajouter un dossier",add_file:"Créer un fichier",download_file:"Téléchargement en cours",rename_dir:"Renommer le dossier",rename_file:"Renommer le fichier",upload_file:"Upload en cours",devices:"Périphériques",duplicate_dir:"Répertoire des doublons",duplicate_file:"Fichier Dupliqués",go_to_file:"Aller au fichier",command_palette:"Palette de commandes"},tooltip:{low_on_space:"Espace disque limité",root_disabled:"La racine {root} n'est pas disponible. Veuillez vérifier vos logs.",items_count:"élément {count} | éléments {count}"},url:{moonraker_telegram_bot_config:"https://github.com/nlef/moonraker-telegram-bot/wiki/Sample-config#%{hash}",klipper_config:"%{klipperDomain}/Config_Reference.html#%{hash}",moonraker_config:"https://moonraker.readthedocs.io/en/latest/configuration/#%{hash}",crowsnest_config:"https://crowsnest.mainsail.xyz/configuration/%{hash}-section"},overlay:{drag_files_enqueue:"<strong>Glisser</strong> les fichiers ici pour les mettre en file d'attente",drag_files_folders_upload:"<strong>Glisser</strong> les fichiers et les dossiers ici pour les télécharger"}},gcode:{btn:{load_current_file:"Charger le fichier actuel"},label:{current_layer_height:"Hauteur de couche actuelle",follow_progress:"Suivre la progression",layer:"Couche",layers:"Couches",parsed:"Analysé",show_extrusions:"Afficher les extrusions",show_moves:"Afficher les déplacements",show_next_layer:"Afficher la couche suivante",show_previous_layer:"Afficher la couche précédente",show_retractions:"Aficher les rétractations",exclude_object:"Exclure un objet",parsing_file:"Analyse du fichier",show_current_layer:"Afficher la couche actuelle",show_parts:"Afficher les pièces"},msg:{confirm:'Le fichier "%{filename}" est de %{size}, ce qui peut être coûteux en ressources pour votre système. En êtes-vous certain ?'},overlay:{drag_file_load:"<strong>Glisser</strong> un fichier gcode ici pour le charger"}},general:{btn:{add:"Ajouter",add_dir:"Ajouter un dossier",add_file:"Créer un fichier",add_printer:"Ajouter une imprimante",adjust_layout:"Ajuster la disposition du tableau de bord",all:"Tout",calibrate:"Calibrer",cancel:"Annuler",clear_profile:"Effacer le profile",close:"Fermer",config_reference:"Référence de configuration",download:"Télécharger",edit:"Editer",exit_layout:"Quitter le mode de mise en page",extrude:"Extruder",heaters_off:"Tout éteindre",load_all:"Tout charger",more_information:"Plus d'informations",pause:"Pause",preheat:"Préchauffe",presets:"Préréglage",preview_gcode:"Prévisualiser le Gcode",quad_gantry_level:"QGL",reboot:"Redémarrer",refresh:"Rafraîchir",remove:"Supprimer",remove_all:"Tout supprimer",rename:"Renommer",reprint:"Imprimer à nouveau",reset_file:"Réinitialiser le fichier",reset_layout:"Remettre la disposition à zéro",restart_firmware:"Redémarrer le firmware",restart_service:"Redémarrer %{service}",restart_service_klipper:"Redémarrer Klipper",restart_service_moonraker:"Redémarrer Moonraker",resume:"Reprendre",retract:"Rétracter",save:"Enregistrer",save_as:"Sauvegarder sous",save_restart:"Enregister et redémarrer",send:"Envoyer",set_color:"Définir la couleur",shutdown:"Éteindre",socket_refresh:"Forcer le rafraichissement",upload:"Uploaded",upload_print:"Uploaded & imprimer",view:"Voir",socket_reconnect:"Se reconnecter",add_to_queue:"Ajouter à la file d'attente",login:"Connexion",reload:"Recharger",retry:"Réessayer",save_config_and_restart:"Sauvegarder la configuration et redémarrer",select_columns:"Sélectionner les colonnes",auth_unsure:"Vous ne savez pas pourquoi vous voyez cela ?",reset_stats:"Réinitialiser les statistiques",copied:"Copié",copy:"Copie",create_zip_archive:"Créer une archive ZIP",delete:"Supprimer",filter:"Filtre",print:"Imprimer",adjusted:"Ajusté",forgot_password:"Vous avez oublié votre mot de passe ?",job_queue:"File d'attente",logout:"Déconnexion",snooze:"Snooze",thumbnail_size:"Taille des vignettes",upload_files:"Téléversement de fichiers",duplicate:"Duplicata",set_default_layout:"Définir en mise en page par défaut",multiply:"Multiplier",abort:"Abandonner",accept:"Accepter",go_to_file:"Aller au fichier",recover:"Récupérer",refresh_metadata:"Actualiser les métadonnées",reset_default_layout:"Réinitialisation de la présentation par défaut",return_dashboard:"Retour au tableau de bord",upload_folder:"Téléversement du dossier"},error:{app_setup_link:`Les instructions d'installation de Fluidd sont disponibles <a target="_blank" href="%{url}">ici</a>`,app_warnings_found:"%{appName} avertissements .",components_config:'La configuration du plugin moonraker est disponible <a target="_blank" href="%{url}">ici.</a>',failed_components:"Moonraker a des plugins en échec, veuillez vérifier les logs, mettre à jour la configuration et redémarrer moonraker ."},label:{accel_to_decel:"Accel. à Décel",acceleration:"Accélération",add_camera:"Ajouter une caméra",add_preset:"Ajouter un pré-réglage",add_user:"Ajouter un utilisateur",api_key:"Clé API",api_url:"URL de l'API",category:"Catégorie",change_password:"Changer le mot de passe",clear_all:"Effacer tout",color:"Couleur",confirm:"Confirmation",current_password:"Mot de passe actuel",disabled_while_printing:"Désactiver durant l'impression",edit_camera:"Éditer une caméra",edit_preset:"Editer le pré-réglage",edit_user:"Modifier l'utilisateur",extrude_length:"Longueur d'extrusion",extrude_speed:"Vitesse d'extrusion",flow:"Débit",free:"libres",high:"Max",host:"Hôte",layout:"Disposition",longest_job:"Impression la plus longue",low:"Min",name:"Nom",new_password:"Nouveau mot de passe",no_notifications:"Aucune notification",off:"Arrêt",password:"Mot de passe",power:"Puissance",printers:"Imprimantes",progress:"Progression",requested_speed:"Vitesse demandée",retract_length:"Longueur de retractation",retract_speed:"Vitesse de rétractation",save_as:"Sauvegarder sous",services:"Services",speed:"Vitesse",sqv:"Vitesse angle droit",total_filament:"Total filament",total_filament_avg:"Moy. par impression",total_jobs:"Nombre total d'impression",total_print_time:"Temps total d'impression",total_print_time_avg:"Moy. par impression",total_time:"Temps total",total_time_avg:"Temps moyen",uncategorized:"Non catégorisé",unretract_speed:"Vitesse de dérétractation",used:"occupé",velocity:"Velocité",visible:"Visible",z_offset:"Z Offset",finish_time:"Fin",unretract_extra_length:"Longueur de rétractation supplémentaire",layer:"Couche",actual_time:"Actuel",file:"Fichier",filament:"Filament",m117:"M117",slicer:"Slicer",total:"Total",screw_name:"Nom de la vis",command:"Commande",numeric_prefix_sort:"Préfixe numérique tri",current_user:"Utilisateur actuel",default:"Défaut",heaters_busy:"L'imprimante est actuellement occupée. Le fait d'éteindre les appareils de chauffage peut entraîner un échec de l'impression.",moonraker:"Moonraker",pause_at_layer:"Pause à la couche",pause_at_next_layer:"Pause à la couche suivante",pause_at_layer_number:"Pause à la couche numéro",smooth_time:"Smooth Time",stepper_enabled:"Stepper activé",synced_extruder:"Extrudeur synchronisé",accepted_screws:"Vis acceptées",on:"On",range:"Portée",screw_index:"Index de vis",turn_device_off:"Éteindre %{device}",unknown:"Inconnu",alias:"Alias",apply_z_offset:"Appliquer et sauvegarder le Z_Offset",edit_filter:"Modifier le filtre",all:"Tout",ldap:"LDAP",screw_number:"Vis %{index}",turn_device_on:"Allumer %{device}",upload_and_print:"Téléverser et imprimer",version_sort:"Tri des versions",unsaved_changes:"Modifications non sauvegardées",add_category:"Ajouter une catégorie",minimum_cruise_ratio:"Ratio de déplacement minimum",compact:"Compact",manage_accounts:"Gérer les comptes",user_managed_source:"Utilisateur géré par %{source} authentification",pressure_advance:"Avance de pression",thumbnail_size:"Taille de la vignette",file_time:"Fichier",bars:"Barres",cross:"Croiser",add_filter:"Ajouter un filtre",auth_source:"Source d'authentification",circle:"Cercle",partial_of_total:"%{partial} de %{total}",username:"Nom d'utilisateur",edit_category:"Modifier la catégorie",stepper_driver:"%{name} Driver"},msg:{password_changed:"Mot de passe modifié",wrong_password:"Oops, il y a eu un problème. Le mot de passe est il correct ?",pending_configuration_sections_deleted:"Les sections suivantes sont marquées pour suppression",bed_screws_adjust:"Cliquez sur <b>Ajusté</b> si un ajustement significatif est nécessaire sur la vis actuelle ; sinon, cliquez sur <b>Accepter</b> pour continuer.",needs_refresh:"Nouveau contenu disponible, veuillez cliquer sur le bouton <b>Recharger</b> pour mettre à jour.",rolledover_logs:"Les journaux d'application suivants ont été transférés : %{applications}",welcome_back:"Bienvenue. <br>Connectez-vous ci-dessous pour rester en communication avec votre imprimante.",offline_ready:"Fluidd est maintenant prêt à travailler hors ligne.",fluidd_settings_restore_failed:"Échec de la restauration des paramètres Fluidd !",not_valid_fluidd_backup_file:"Fichier de sauvegarde Fluidd non valide !",fluidd_settings_backup_failed:"Échec de la sauvegarde des paramètres Fluidd !"},simple_form:{error:{arrayofnums:"Nombres uniquement",exists:"Existe déja",invalid_url:"URL invalide",max:"Max %{max}",min:"Min %{min}",min_or_0:"Min %{min} ou 0",password_username:"Le nom d'utilisateur ne correspond pas",required:"Requis",invalid_number:"Numéro invalide",credentials:"Identifiants incorrects",invalid_expression:"Expression invalide",invalid_aspect:"Ratio d'aspect invalide"},msg:{confirm:"Êtes-vous sûr(e) ?",confirm_reboot_host:"Êtes-vous sûr(e) ? Ceci va redémarrer le système hôte .",confirm_shutdown_host:"Êtes-vous sûr(e) ? Ceci va éteindre le système hôte .",confirm_forcemove_toggle:"En êtes-vous sûr ? Cela peut endommager l'imprimante.",confirm_power_device_toggle:"Êtes-vous sûr ? Cela va basculer l'état de cet appareil.",unsaved_changes:"Vous avez des modifications non enregistrées. Êtes-vous sûr de vouloir fermer ce fichier ?",confirm_service_restart:"Êtes-vous sûr de vouloir redémarrer le service %{name} ?",confirm_cancel_print:"Êtes-vous sûr de vouloir annuler l'impression en cours ?",confirm_delete:"Êtes-vous sûr ? Cette opération supprime l'élément sélectionné. | Êtes-vous sûr ? Cela supprimera les {count} éléments sélectionnés.",confirm_emergency_stop:"Êtes-vous sûr de vouloir arrêter d'urgence l'imprimante ?",confirm_exclude_object:"Êtes-vous sûr de vouloir exclure cet objet de l'impression ?",confirm_load_bedmesh_profile:"L'imprimante est actuellement occupée. Êtes-vous sûr de vouloir charger le profil %{name} ?",confirm_clear_mesh:"L'imprimante est actuellement occupée. Êtes-vous sûr de vouloir effacer le maillage du lit ?",confirm_service_start:"Êtes-vous sûr de vouloir démarrer le service %{name} ?",confirm_remove_user:"Êtes-vous sûr de vouloir supprimer l'utilisateur %{username} ?",confirm_service_stop:"Êtes-vous sûr de vouloir arrêter le service %{name} ?",no_file_preview:"%{name} ne peut pas être prévisualisé actuellement."}},table:{header:{actions:"Actions",end_time:"Terminé",estimated_time:"Temps estimé",filament:"Filament",filament_used:"Filament utilisé",filament_weight_total:"Poids total",first_layer_bed_temp:"Temp. initiale du lit",first_layer_extr_temp:"Temp. initiale de l'extrudeur",first_layer_height:"Hauteur première couche",height:"Hauteur",last_printed:"Dernière impression",layer_height:"Hauteur de couche",modified:"Modifié",name:"Nom",print_duration:"Durée d'impression",size:"Taille",slicer:"Slicer",slicer_version:"Version du slicer",start_time:"Démarré",status:"Statut",total_duration:"Durée totale",filament_type:"Type de filament",chamber_temp:"Température de la chambre",filament_name:"Nom du filament",time_in_queue:"Temps d'attente",nozzle_diameter:"Diamètre de la buse",time_added:"Temps ajouté"}},title:{add_printer:"Ajouter une imprimante",bedmesh:"Maille du lit",bedmesh_controls:"Options du Bed Mesh",camera:"Webcam",config_files:"Fichiers de configuration",configure:"Configuration",console:"Console",endstops:"Fin de course",fans_outputs:"Ventilateur & sorties",gcode_preview:"Prévisualisation du Gcode",history:"Historique des impressions",home:"Tableau de bord",jobs:"Fichiers",limits:"Limites de l'imprimante",macros:"Macros",retract:"Rétractation Firmware",runout_sensors:"Capteurs de filament",settings:"Paramètres",stats:"Statistiques de l'imprimante",system:"Système",system_overview:"Information système",temperature:"Température",tool:"Outil",tune:"Réglages",add_chart:"Ajouter un graphique",rollover_logs:"Rotation des logs",not_found:"404 Non trouvé",diagnostics:"Diagnostics",edit_chart:"Editer le graphique",job_queue:"File d'attente",timelapse:"Timelapse",metrics_explorer:"Explorateur de métriques",other_files:"Autres fichiers",pending_configuration_changes:"Attente de changements de configuration en cours"},tooltip:{estop:"Arrêt d'urgence",reload_klipper:"Recharge la configuration Klipper.",reload_restart_klipper:"Recharge la configuration Klipper et redémarre les cartes de contrôle.",restart_klipper:"Redémarre le service système klipper.",browse_metrics:"Consulter les indicateurs disponibles",rollover_logs:"Rotation des logs",managed_by_moonraker:"Géré par la configuration de votre Moonraker",notifications:"Notifications",run_collector:"Exécuter le collecteur",file_browser_configuration_help:"Copiez les fichiers et les dossiers dans les fichiers de configuration en les faisant glisser d'ici et en les déposant là",file_browser_help:`Glisser-déposer des fichiers ou des dossiers depuis l'extérieur du navigateur pour les téléverser ici<br>Déplacer des fichiers et des dossiers en les glissant-déposant dans des sous-dossiers ou ".."`}},printer:{state:{busy:"Occupée",complete:"Terminé",idle:"Inactif",loading:"Chargement",paused:"En pause",printing:"Impression en cours",ready:"Prêt",standby:"Stand-by",cancelled:"Annulé"},title:{printer_status:"État de l'imprimante"}},setting:{btn:{add_camera:"Ajouter une caméra",add_thermal_preset:"Ajouter un pré-réglage",add_user:"Ajouter un utilisateur",reset:"RAZ",select_theme:"Sélectionner le thème",add_category:"Ajouter une catégorie",add_filter:"Ajouter un filtre",add_metric:"Ajouter un indicateur",backup:"Sauvegarde",restore:"Restaurer"},camera_type_options:{mjpegadaptive:"MJPEG Adaptive",mjpegstream:"Flux MJPEG",video:"caméra ip",webrtc_camera_streamer:"WebRTC (camera-streamer)",iframe:"Page HTTP",webrtc_go2rtc:"WebRTC (go2rtc)",hlsstream:"Flux HLS",webrtc_mediamtx:"WebRTC (MediaMTX)"},label:{all_off:"Tout éteindre",all_on:"Tout allumer",camera_flip_x:"Retourner horizontalement",camera_flip_y:"Retourner verticalement",camera_stream_type:"Type de flux",confirm_on_estop:"Demander une confirmation en cas d'arrêt d'urgence",dark_mode:"Mode sombre",default_extrude_length:"Longueur d'extrusion par défaut",default_extrude_speed:"Vitesse d'extrusion par défaut",default_toolhead_move_length:"Longueur de déplacement par défaut de la tête d'outil",default_toolhead_xy_speed:"Vitesse XY de la tête d'outil par défaut",default_toolhead_z_speed:"Vitesse Z de la tête d'outil par défaut",draw_background:"Afficher le fond d'écran",enable:"Activer",enable_notifications:"Activer les notifications",extrusion_line_width:"Largeur de ligne d'extrusion",flip_horizontal:"Retourner horizontalement",flip_vertical:"Retourner verticalement",fps_target:"Nombre d'images par seconde",gcode_coords:"Utiliser les coordonnées GCode",invert_x_control:"Inverser les contrôles en X",invert_y_control:"Inverser les contrôles en Y",invert_z_control:"Inverser les contrôles en Z",language:"Langue d'affichage",move_line_width:"Largeur de ligne de déplacement",primary_color:"Couleur primaire",printer_name:"Nom de l'imprimante",reset:"Remettre à zéro",retraction_icon_size:"Taille de l'icone de rétractation",show_animations:"Afficher les animations",theme_preset:"Préréglage communautaire",thermal_preset_name:"Nom du pré-réglage",z_adjust_values:"Valeurs de Z Adjust",thermal_preset_gcode:"GCode",print_eta_calculation:"Imprimer le calcul de l'ETA",print_in_progress_layout:"Afficher la progression",print_progress_calculation:"Afficher le calcul de la progression",show_manual_probe_dialog_automatically:"Afficher automatiquement la boîte de dialogue pour la Sonde manuelle",show_barometric_pressure:"Afficher la pression barométrique",camera_fullscreen_action:{title:"Action plein écran",embed:"Embarquer",rawstream:"Flux brut"},collector:"Collecteur",contains:"Contient",dashed:"En pointillés",metrics:"Indicateurs",name:"Nom",show_save_config_and_restart:'Bouton "Sauvegarder la configuration et redémarrer" dans la barre de navigation supérieure',auto_load_mobile_on_print_start:"Chargement automatique des fichiers sur les appareils mobiles",confirm_on_power_device_change:"Demander une confirmation pour le changement d'état de l'alimentation de l'appareil",confirm_on_save_config_and_restart:"Examiner les modifications de configuration en cours avant l'enregistrement et le redémarrage",enable_diagnostics:"Activer les diagnostics",filter:"Filtre | Filtres",height:"Hauteur",icon:"Icône",keyboard_shortcuts:"Raccourcis clavier",show_chart:"Afficher le graphique",show_code_lens:"Montrer CodeLens",show_legend:"Afficher la légende",show_upload_and_print:"Afficher le bouton de téléversement et d'impression dans la barre de navigation supérieure",toolhead_move_distances:"Valeurs de distance de la tête d'outil",show_gas_resistance:"Montrer la résistance au gaz",sections_to_ignore_pending_configuration_changes:"Sections ignorant les changements de configuration en attente",show_rate_of_change:"Afficher le taux de variation de la température",show_relative_humidity:"Afficher l'humidité relative",solid:"Solide",toolhead_control_style:"Style de contrôle de la tête d'outil",starts_with:"Commence par",toolhead_z_move_distances:"Valeurs de la distance Z de la tête d'outil",date_format:"Format de la date",time_format:"Format de l'heure",default_min_layer_height:"Hauteur minimale de la couche par défaut",dotted:"Pointillés",title:"Titre",text_sort_order:"Ordre de tri du texte",type:"Type",unit:"Unité",show_bed_screws_adjust_dialog_automatically:"Afficher la boîte de dialogue Ajustement automatique des vis de lit",show_logo_on_background:"Afficher le logo sur l'arrière-plan",to_browser_local_storage:"Pour le stockage local du navigateur",to_browser_session_storage:"Stockage de la session du navigateur",optional:"En option",last_result:"Dernier résultat",line_color:"Couleur de la ligne",min:"Minimum",max:"Maximum",axes:"Axes",enable_xy_homing:"Activer le Homing XY",aspect_ratio:"Ratio d'aspect",aspect_ratio_format:"[width : height]",auto_edit_extensions:"Extensions à ouvrir automatiquement en mode édition",auto_follow_on_file_load:"Suivi automatique de la progression du chargement des fichiers",auto_load_on_print_start:"Chargement automatique du fichier au démarrage de l'impression",camera_rotate_by:"Rotation par",camera_url_stream:"URL du flux de la caméra",draw_origin:"Dessiner l'origine",confirm_dirty_editor_close:"Demander confirmation avant fermeture de l'éditeur avec changements non sauvegardés",expression:"Expression",fill_opacity:"Opacité du remplissage",hide_single_part_bounding_box:"Masquer la boîte englobante de la pièce lors de l'impression d'une seule pièce",fill_color:"Couleur de remplissage",fps_idle_target:"FPS Cible sans mise au point",left_y:"Axe Y gauche",line_style:"Style de ligne",never:"Jamais",none:"Aucun",power_toggle_in_top_nav:"Bouton d'allumage dans la navigation supérieure",right_y:"Axe Y droit",save_and_restore_view_state:"Sauvegarder et restaurer l'état de la vue",show_screws_tilt_adjust_dialog_automatically:"Afficher automatiquement la boîte de dialogue des Vis pour le Réglage de l'inclinaison",toolhead_xy_move_distances:"Valeurs de la distance XY de la tête d'outil",force_move_toggle_warning:"Confirmation obligatoire lors de l'activation de FORCE_MOVE",camera_url_snapshot:"URL de l'instatané de la caméra",card:"Carte",fluidd_settings_in_moonraker_db:"Paramètres Fluidd dans la base de données Moonraker"},timer_options:{duration:"Durée uniquement",filament:"Filament",file:"Fichier",slicer:"Slicer",slicer_m73:"Slicer (M73)",absolute_file_position:"Position absolue du fichier",relative_file_position:"Position relative du fichier"},title:{authentication:"Authentification",camera:"Webcam",gcode_preview:"Prévisualiser le Gcode",general:"Général",macros:"Macros",theme:"Thème",thermal_presets:"Pré-réglages de température",tool:"Outil",file_editor:"Éditeur de fichiers",console:"Console",file_browser:"Navigateur de fichiers"},tooltip:{gcode_coords:"Utiliser la posistion GCode au lieu de la position de l'outil sur le tableau de bord",average_calculation:"Si plusieurs options sont sélectionnées, une moyenne sera calculée",show_manual_probe_dialog_automatically:"Affiche automatiquement la boîte de dialogue d'aide si l'on exécute une sonde manuelle",show_screws_tilt_adjust_dialog_automatically:"Affiche automatiquement un dialogue d'aide si l'outil SCREWS_TILT_CALCULATE est exécuté",theme_disclaimer:"Ces thèmes comportent des noms de marques et des logos qui sont la propriété intellectuelle de leurs propriétaires respectifs.<br> L'inclusion de ces noms et logos est faite avec la permission des marques.<br> Cependant, veuillez noter que ces thèmes ne sont pas officiellement maintenus par les marques respectives.<br> Tous les problèmes ou demandes liés aux thèmes doivent être adressés à l'équipe Fluidd.<br> L'utilisation des noms de marques et des logos est uniquement à des fins décoratives et esthétiques, et aucune association officielle avec ou l'approbation par les marques n'est implicite.",keyboard_shortcuts:"[BETA] Activer et appuyer sur '?' pour afficher la liste des raccourcis clavier disponibles",diagnostics_performance:"[BETA] L'enregistrement des informations de diagnostic peut avoir un impact sur les performances",show_bed_screws_adjust_dialog_automatically:"Affiche automatiquement une boîte de dialogue d'aide si l'outil BED_SCREWS_ADJUST est en cours d'exécution"},camera_rotate_options:{90:"90°",180:"180°",270:"270°",none:"Aucun"}},socket:{msg:{connecting:"Connexion à Moonraker ...",no_connection:"Pas de connection à Moonraker . Vérifiez l'état de Moonraker et / ou rafraichissez ."}},system_info:{label:{capacity:"Capacité",cpu_desc:"Description du processeur",distribution_codename:"Nom de code",distribution_like:"Distribution comme",distribution_name:"Distribution",hardware_desc:"Description du matériel",hostname:"Nom d'hôte",klipper_load:"Charge de Klipper",manufactured:"Fabriqué",manufacturer:"Fabricant",mcu_awake:"{mcu} Temps de fonctionnement",mcu_bandwidth:"{mcu} Bande passante",mcu_load:"{mcu} Charge",model:"Modèle de processeur",moonraker_load:"Charge de Moonraker",processor_desc:"Processeur",product_name:"Nom du produit",serial_number:"Numéro de série",system_load:"Charge du système",system_memory:"Mémoire système",system_utilization:"Utilisation du système",total_memory:"Mémoire totale",network:"Réseau",micro_controller:"Micro-contrôleur",devices:"Dispositifs",frequency:"Fréquence",memory_used:"mémoire utilisée",mcu_information:"Informations sur le {mcu}",operating_system:"Système d'exploitation",awake_time:"temps d'éveil",constants:"Constantes",last_stats:"Dernières statistiques",version:"Version",virtualization:"Virtualisation",load:"charge"},msg:{no_devices_found:"Aucun dispositif trouvé",no_devices_searched:"Utilisez le bouton d'actualisation pour rechercher des appareils",canbus_warning:`Seuls les nœuds de bus CAN non assignés peuvent être détectés.<br> Il est recommandé de n'avoir qu'un seul dispositif non assigné connecté au bus CAN pour éviter les problèmes de communication.<br> De plus amples informations peuvent être trouvées <a target="_blank" href="https://moonraker.readthedocs.io/en/latest/web_api/#query-unassigned-canbus-uuids">ici.</a>`}},tool:{btn:{home_x:"X",home_y:"Y",home_all:"Tous"},tooltip:{extruder_disabled:"extrudeur désactivé, en dessous de min_extrude_temp( %{min} <small>°C</small>)",home_xy:"Home XY",home_z:"Home Z",absolute_positioning:"Positionnement absolu",tools:"Outils",manual_probe:"Sonde manuelle",motors_off:"Moteurs éteints",relative_positioning:"Positionnement relatif",select_tool:"Sélectionner l'outil %{tool}"},title:{bed_screws_adjust:"Ajuste les vis du lit",manual_probe:"Sonde manuelle",screws_tilt_adjust:"Vis Réglage de l'inclinaison"},label:{stats_volumetric_flow:`Extrudant à %{extrudeSpeed} mm/s<span class="secondary--text">, l'extrudeur doit pouvoir fournir un</span> débit volumétrique estimé de %{estimatedVolumetricFlow} mm³/s`,stats_active_extruder:`<span class="secondary--text">La configuration active de l'extrudeuse est définie pour</span> %{filamentDiameter} mm de diamètre de filament <span class="secondary--text">et</span> %{nozzleDiameter} mm de buse`,stats_extruded_length:`L'extrusion de %{extrudeLength} mm de filament à %{extrudeFactor} % de débit<span class="secondary--text">, donnera une</span> longueur de sortie estimée à %{estimatedExtrudedLength} mm`,stats_max_speed:`<span class="secondary--text">En supposant une</span> %{layerHeight} mm de hauteur de couche<span class="secondary--text">, la</span> vitesse d'impression maximale estimée est %{estimatedMaxSpeed} mm/s`}},version:{btn:{check_for_updates:"Vérifier les mises à jour",finish:"Terminer",update:"Mettre à jour",view_versions:"Voir les versions",update_all:"Tout mettre à jour"},label:{commit_history:"Historique des commits",commits_on:"commité le",committed:"Commité",dirty:"SOUILLÉ",invalid:"INVALIDE",os_packages:"Paquets du système d'exploitation",package_list:"Liste des paquets",up_to_date:"A JOUR",updates_available:"Mises à jour disponibles",old_component_version:"Vous utilisez une ancienne version de %{name} qui ne prend pas en charge toutes les fonctionnalités de Fluidd.<br>Mettre à jour %{name} vers au moins %{version}."},status:{finished:"Mises à jour terminées",updating:"Mise à jour ..."},title:"Mises à jour",tooltip:{commit_history:"Historique des commits",dirty:"indique un état 'detached head', pas sur 'master' ou une 'origin' invalide",invalid:"indique des changements locaux dans le répo",packages:"Paquets",release_notes:"Notes de mise à jour"}},spoolman:{msg:{error:{spool_not_existant:"Le spool que vous avez analysé n'existe pas dans la base de données.",cors:"Une erreur s'est produite lors de l'accès au flux des caméras. Veuillez vous assurer que le serveur de votre webcam autorise l'accès CORS.",no_image_data:"Une erreur s'est produite lors de l'accès au flux de la caméra. Veuillez vérifier la configuration de votre caméra ou essayer une autre source de caméra."},warning:{code_not_recognized:"Ce code ne ressemble pas à un code QR compatible.",invalid_spool_id:"L'identifiant du spool contenu dans ce code QR n'est pas valide."},not_connected:"Le serveur Spoolman n'est pas disponible.",no_spool:"Vous n'avez pas sélectionné de bobine. Êtes-vous sûr de vouloir imprimer sans suivi de filament ?",mismatched_filament:"Le matériau du filament sélectionné ne correspond pas au matériau sélectionné dans le slicer. Êtes-vous sûr de vouloir continuer ?",no_filament:"Il se peut que la bobine que vous avez sélectionnée ne contienne pas suffisamment de filament pour terminer le travail d'impression. Êtes-vous sûr de vouloir continuer ?",no_required_length:"La quantité de filament nécessaire pour imprimer le fichier sélectionné est inconnue. Souhaitez-vous continuer ?",info:{howto:"Montrez le code QR de votre bobine à la caméra. Cette fenêtre se fermera dès qu'une bobine sera détectée."},tracking_inactive:"Le suivi du filament est inactif. Pour commencer, veuillez sélectionner une bobine."},label:{first_used:"Première utilisation",change_spool:"Changer de bobine",remaining_weight:"Restant",filament_name:"Filament",location:"Localisation",comment:"Commentaire",id:"ID",lot_nr:"Lot n°",material:"Matériel",active_spool:"Bobine active",last_used:"Dernière utilisation",device_camera:"Périphérique",vendor:"Vendeur"},btn:{scan_code:"Scanner le code",select:"Sélectionner | Sélectionner pour {macro}",manage_spools:"Gérer les bobines"},title:{spoolman:"Spoolman",spool_selection:"Sélection du spool | Sélection du spool pour la macro {macro}",scan_spool:"Scanner la bobine"},setting:{auto_select_spool_on_match:"Validation automatique de la sélection de la bobine en cas de correspondance avec le code QR",show_spool_selection_dialog_on_print_start:"Afficher la boîte de dialogue de sélection de la bobine au démarrage de l'impression",auto_open_qr_camera:"Ouverture automatique de l'appareil photo pour la détection des codes QR",prefer_device_camera:"Utiliser l'appareil photo de l'appareil pour la détection des codes QR, le cas échéant",warn_on_not_enough_filament:"Afficher un avertissement lorsque la bobine sélectionnée n'a plus assez de filament pour terminer l'impression",warn_on_filament_type_mismatch:"Afficher un avertissement lorsque le type de filament de la bobine et celui sélectionné dans le slicer ne correspondent pas"}},history:{msg:{confirm_jobs:"Êtes-vous sûr ? Cette opération effacera tous les jobs.",confirm:"Êtes-vous sûr ? Cela effacera tout l'historique et les statistiques de l'imprimante",confirm_stats:"Êtes-vous sûr ? Cela effacera toutes les statistiques."}},timelapse:{setting:{park_retract_distance:"Distance de rétractation du mode Park",park_time:"Temps du mode Park",parkhead:"Parquer la tête d'impression",parkpos:{center:"Centre",front_right:"Avant Droit",back_left:"Arrière Gauche",y_only:"Mouvement de Y seulement",x_only:"Mouvement de X seulement",label:"Position du mode Park",custom:"Personnalisé",front_left:"Avant Gauche",back_right:"Arrière Droit"},mode_hyperlapse:"Hyperlapse",park_travel_speed:"Vitesse pour ce mettre en mode Park",targetlength:"Longeur cible",variable_fps_min:"Fréquence de rafraichissement minimale",park_custom_pos_x:"Position du mode Park en X",park_custom_pos_dz:"Position du Z-Hop pour le mode Park",fw_retract:"Utiliser la rétractation du micrologiciel",previewimage:"Générer une miniature",saveframes:"Sauvegardes les images",enable:"Activé",crf:"Facteur de taux constant",duplicatelastframe:"Duplication des dernières images",gcode_verbose:"GCode détaillé",park_extrude_distance:"Distance d'extrusion du mode Park",park_extrude_speed:"Vitesse d'extrusion du mode Park",mode:"Mode",mode_layermacro:"Macro de couche",hyperlapse_cycle:"Cycle Hyperlapse",output_framerate:"Fréquence de sortie",auto_render:"Rendu automatique",park_retract_speed:"Vitesse de rétraction du mode Park",park_custom_pos_y:"Position du mode Park en Y",stream_delay_compensation:"Délai de la compensation",variable_fps:"FPS variable",variable_fps_max:"Fréquence de rafraichissement maximale"},title:{timelapse_status:"Statut du timelapse",timelapse_settings:"Réglages Timelapse",render_settings:"Paramètres de rendu"},label:{frame:"Image | Images",frames:"Image %{frames} | %{frames} images",length:"Longueur estimée : %{length}"},error:{newframe:"Erreur lors de la prise d'une image timelapse"},btn:{save_frames:"Sauvegarder les prise de vues",render:"Rendu"}},sensors:{title:{sensors:"Capteurs"}},keyboard_shortcuts:{label:{tool:"Outil",actions:"Actions",cancel:"Annuler",emergency_stop:"Arrêt d'urgence",home_all:"Origine tout axe",navigation:"Navigation",open_keyboard_shortcut_help:"Ouvrir l'aide sur les raccourcis clavier",pause:"Pause",printing:"Impression"},title:{keyboard_shortcuts:"Raccourcis clavier"}},job_queue:{msg:{confirm:"Êtes-vous sûr ? Cela effacera toute la file d'attente de l'imprimante"},label:{number_of_copies:"Nombre de copies"},title:{multiply_job:"Multiplier le job | Multiplier les jobs"},tooltip:{help:"Mettez les jobs en file d'attente en faisant glisser les fichiers depuis les jobs et en les déposant ici<br>Réglez l'ordre des jobs en file d'attente en les faisant glisser vers le haut ou vers le bas"}}}};export{e as default};
