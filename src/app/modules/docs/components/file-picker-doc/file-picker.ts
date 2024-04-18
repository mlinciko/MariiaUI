export const FILE_PICKER_TITLE = 'FilePicker';
export const FILE_PICKER_DESCRIPTION =
  'UI component allows the user to select files from their local device';
export const FILE_PICKER_CODE = `  /*Input params */
@Input() label = '';
@Input() buttonLabel = '';
@Input() allowedTypes: string[] = [];
@Input() fileDeletingEnabled = true;
@Input() disabled = false;
@Input() placeholder = '';
@Input() readOnly = false;
@Input() visible = true;
@Input() formControl: FormControl = new FormControl<File | null>(null);

/*Output events */
@Output() onFileSelected: EventEmitter<File | null> = new EventEmitter();
@Output() onFileDeleted: EventEmitter<File | null> = new EventEmitter();`;
