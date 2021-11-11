import { join } from 'path';
import { Project, SourceFile, VariableDeclarationKind } from 'ts-morph';

interface GenerateColorOptions {
  theme: Record<string, any>;
  palette: Record<string, any>;
}

export class GenerateColor {
  private readonly theme: string[];

  private readonly palette: string[];

  private readonly sourceFile: SourceFile = new Project().createSourceFile(
    join(__dirname, '../colors.ts'),
    '',
    { overwrite: true },
  );

  constructor(options: GenerateColorOptions) {
    this.theme = Object.keys(options.theme);
    this.palette = Object.keys(options.palette);
  }

  /**
   * input a & ['b', 'c']
   *
   * generate `export const a = ['b', 'c'] as const;`
   */
  private createConstArray(name: string, value: string[]): void {
    this.sourceFile
      .addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        declarations: [
          {
            name,
            initializer: `[${value
              .map(item => `'${item}'`)
              .join(', ')}] as const`,
          },
        ],
      })
      .setIsExported(true);
  }

  /**
   * input a & A
   *
   * generate `export type A = typeof a[number]`
   */
  private createConstArrayType(variableName: string, typeName: string): void {
    this.sourceFile
      .addTypeAlias({
        name: typeName,
        type: `typeof ${variableName}[number]`,
      })
      .setIsExported(true);
  }

  /**
   * creata colors.ts file
   */
  public create() {
    this.createConstArray('theme', this.theme);
    this.createConstArrayType('theme', 'ThemeCssName');
    this.createConstArray('palette', this.palette);
    this.createConstArrayType('palette', 'PaletteCssName');
    return this.sourceFile.save();
  }
}
