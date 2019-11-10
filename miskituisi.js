package appinventor.ai_jmpetters2.miskituisi;

import com.google.appinventor.components.runtime.Component;
import gnu.expr.ModuleBody;
import gnu.expr.ModuleMethod;
import gnu.mapping.CallContext;
import gnu.mapping.Symbol;
import gnu.mapping.Values;

public class Screen3$frame extends ModuleBody
{
  Screen3 $main;

  public Object apply0(ModuleMethod paramModuleMethod)
  {
    switch (paramModuleMethod.selector)
    {
    default:
      return super.apply0(paramModuleMethod);
    case 18:
      return Screen3.lambda2();
    case 19:
      this.$main.$define();
      return Values.empty;
    case 20:
      return Screen3.lambda3();
    case 21:
      return Screen3.lambda4();
    case 22:
      return Screen3.lambda5();
    case 23:
      return Screen3.lambda6();
    case 24:
      return Screen3.lambda7();
    case 25:
      return this.$main.CampoDeTexto1$GotFocus();
    case 26:
      return Screen3.lambda8();
    case 27:
      return Screen3.lambda9();
    case 28:
      return Screen3.lambda10();
    case 29:
      return Screen3.lambda11();
    case 30:
      return Screen3.lambda12();
    case 31:
      return Screen3.lambda13();
    case 32:
      return Screen3.lambda14();
    case 33:
      return Screen3.lambda15();
    case 34:
      return this.$main.Traducir$Click();
    case 35:
      return Screen3.lambda16();
    case 36:
      return Screen3.lambda17();
    case 37:
      return this.$main.Leer_en_alta_voz$Click();
    case 38:
      return Screen3.lambda18();
    case 39:
    }
    return Screen3.lambda19();
  }

  // ERROR //
  public Object apply1(ModuleMethod paramModuleMethod, Object paramObject)
  {
    // Byte code:
    //   0: aload_1
    //   1: getfield 18	gnu/expr/ModuleMethod:selector	I
    //   4: tableswitch	default:+72 -> 76, 1:+79->83, 2:+88->92, 3:+111->115, 4:+72->76, 5:+123->127, 6:+72->76, 7:+143->147, 8:+72->76, 9:+72->76, 10:+72->76, 11:+72->76, 12:+171->175, 13:+183->187, 14:+195->199
    //   77: aload_1
    //   78: aload_2
    //   79: invokespecial 103	gnu/expr/ModuleBody:apply1	(Lgnu/expr/ModuleMethod;Ljava/lang/Object;)Ljava/lang/Object;
    //   82: areturn
    //   83: aload_0
    //   84: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   87: aload_2
    //   88: invokevirtual 107	appinventor/ai_jmpetters2/miskituisi/Screen3:getSimpleName	(Ljava/lang/Object;)Ljava/lang/String;
    //   91: areturn
    //   92: aload_0
    //   93: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   96: astore 9
    //   98: aload_2
    //   99: checkcast 109	android/os/Bundle
    //   102: astore 11
    //   104: aload 9
    //   106: aload 11
    //   108: invokevirtual 113	appinventor/ai_jmpetters2/miskituisi/Screen3:onCreate	(Landroid/os/Bundle;)V
    //   111: getstatic 37	gnu/mapping/Values:empty	Lgnu/mapping/Values;
    //   114: areturn
    //   115: aload_0
    //   116: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   119: aload_2
    //   120: invokevirtual 117	appinventor/ai_jmpetters2/miskituisi/Screen3:androidLogForm	(Ljava/lang/Object;)V
    //   123: getstatic 37	gnu/mapping/Values:empty	Lgnu/mapping/Values;
    //   126: areturn
    //   127: aload_0
    //   128: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   131: astore 6
    //   133: aload_2
    //   134: checkcast 119	gnu/mapping/Symbol
    //   137: astore 8
    //   139: aload 6
    //   141: aload 8
    //   143: invokevirtual 123	appinventor/ai_jmpetters2/miskituisi/Screen3:lookupInFormEnvironment	(Lgnu/mapping/Symbol;)Ljava/lang/Object;
    //   146: areturn
    //   147: aload_0
    //   148: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   151: astore_3
    //   152: aload_2
    //   153: checkcast 119	gnu/mapping/Symbol
    //   156: astore 5
    //   158: aload_3
    //   159: aload 5
    //   161: invokevirtual 127	appinventor/ai_jmpetters2/miskituisi/Screen3:isBoundInFormEnvironment	(Lgnu/mapping/Symbol;)Z
    //   164: ifeq +7 -> 171
    //   167: getstatic 133	java/lang/Boolean:TRUE	Ljava/lang/Boolean;
    //   170: areturn
    //   171: getstatic 136	java/lang/Boolean:FALSE	Ljava/lang/Boolean;
    //   174: areturn
    //   175: aload_0
    //   176: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   179: aload_2
    //   180: invokevirtual 139	appinventor/ai_jmpetters2/miskituisi/Screen3:addToFormDoAfterCreation	(Ljava/lang/Object;)V
    //   183: getstatic 37	gnu/mapping/Values:empty	Lgnu/mapping/Values;
    //   186: areturn
    //   187: aload_0
    //   188: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   191: aload_2
    //   192: invokevirtual 142	appinventor/ai_jmpetters2/miskituisi/Screen3:sendError	(Ljava/lang/Object;)V
    //   195: getstatic 37	gnu/mapping/Values:empty	Lgnu/mapping/Values;
    //   198: areturn
    //   199: aload_0
    //   200: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   203: aload_2
    //   204: invokevirtual 145	appinventor/ai_jmpetters2/miskituisi/Screen3:processException	(Ljava/lang/Object;)V
    //   207: getstatic 37	gnu/mapping/Values:empty	Lgnu/mapping/Values;
    //   210: areturn
    //   211: astore 10
    //   213: new 147	gnu/mapping/WrongType
    //   216: dup
    //   217: aload 10
    //   219: ldc 148
    //   221: iconst_1
    //   222: aload_2
    //   223: invokespecial 151	gnu/mapping/WrongType:<init>	(Ljava/lang/ClassCastException;Ljava/lang/String;ILjava/lang/Object;)V
    //   226: athrow
    //   227: astore 7
    //   229: new 147	gnu/mapping/WrongType
    //   232: dup
    //   233: aload 7
    //   235: ldc 153
    //   237: iconst_1
    //   238: aload_2
    //   239: invokespecial 151	gnu/mapping/WrongType:<init>	(Ljava/lang/ClassCastException;Ljava/lang/String;ILjava/lang/Object;)V
    //   242: athrow
    //   243: astore 4
    //   245: new 147	gnu/mapping/WrongType
    //   248: dup
    //   249: aload 4
    //   251: ldc 155
    //   253: iconst_1
    //   254: aload_2
    //   255: invokespecial 151	gnu/mapping/WrongType:<init>	(Ljava/lang/ClassCastException;Ljava/lang/String;ILjava/lang/Object;)V
    //   258: athrow
    //
    // Exception table:
    //   from	to	target	type
    //   98	104	211	java/lang/ClassCastException
    //   133	139	227	java/lang/ClassCastException
    //   152	158	243	java/lang/ClassCastException
  }

  // ERROR //
  public Object apply2(ModuleMethod paramModuleMethod, Object paramObject1, Object paramObject2)
  {
    // Byte code:
    //   0: aload_1
    //   1: getfield 18	gnu/expr/ModuleMethod:selector	I
    //   4: tableswitch	default:+72 -> 76, 4:+80->84, 5:+104->108, 6:+72->76, 7:+72->76, 8:+125->129, 9:+149->153, 10:+72->76, 11:+162->166, 12:+72->76, 13:+72->76, 14:+72->76, 15:+72->76, 16:+72->76, 17:+175->179
    //   77: aload_1
    //   78: aload_2
    //   79: aload_3
    //   80: invokespecial 159	gnu/expr/ModuleBody:apply2	(Lgnu/expr/ModuleMethod;Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;
    //   83: areturn
    //   84: aload_0
    //   85: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   88: astore 10
    //   90: aload_2
    //   91: checkcast 119	gnu/mapping/Symbol
    //   94: astore 12
    //   96: aload 10
    //   98: aload 12
    //   100: aload_3
    //   101: invokevirtual 163	appinventor/ai_jmpetters2/miskituisi/Screen3:addToFormEnvironment	(Lgnu/mapping/Symbol;Ljava/lang/Object;)V
    //   104: getstatic 37	gnu/mapping/Values:empty	Lgnu/mapping/Values;
    //   107: areturn
    //   108: aload_0
    //   109: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   112: astore 7
    //   114: aload_2
    //   115: checkcast 119	gnu/mapping/Symbol
    //   118: astore 9
    //   120: aload 7
    //   122: aload 9
    //   124: aload_3
    //   125: invokevirtual 166	appinventor/ai_jmpetters2/miskituisi/Screen3:lookupInFormEnvironment	(Lgnu/mapping/Symbol;Ljava/lang/Object;)Ljava/lang/Object;
    //   128: areturn
    //   129: aload_0
    //   130: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   133: astore 4
    //   135: aload_2
    //   136: checkcast 119	gnu/mapping/Symbol
    //   139: astore 6
    //   141: aload 4
    //   143: aload 6
    //   145: aload_3
    //   146: invokevirtual 169	appinventor/ai_jmpetters2/miskituisi/Screen3:addToGlobalVarEnvironment	(Lgnu/mapping/Symbol;Ljava/lang/Object;)V
    //   149: getstatic 37	gnu/mapping/Values:empty	Lgnu/mapping/Values;
    //   152: areturn
    //   153: aload_0
    //   154: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   157: aload_2
    //   158: aload_3
    //   159: invokevirtual 173	appinventor/ai_jmpetters2/miskituisi/Screen3:addToEvents	(Ljava/lang/Object;Ljava/lang/Object;)V
    //   162: getstatic 37	gnu/mapping/Values:empty	Lgnu/mapping/Values;
    //   165: areturn
    //   166: aload_0
    //   167: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   170: aload_2
    //   171: aload_3
    //   172: invokevirtual 176	appinventor/ai_jmpetters2/miskituisi/Screen3:addToGlobalVars	(Ljava/lang/Object;Ljava/lang/Object;)V
    //   175: getstatic 37	gnu/mapping/Values:empty	Lgnu/mapping/Values;
    //   178: areturn
    //   179: aload_0
    //   180: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   183: aload_2
    //   184: aload_3
    //   185: invokevirtual 180	appinventor/ai_jmpetters2/miskituisi/Screen3:lookupHandler	(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;
    //   188: areturn
    //   189: astore 11
    //   191: new 147	gnu/mapping/WrongType
    //   194: dup
    //   195: aload 11
    //   197: ldc 182
    //   199: iconst_1
    //   200: aload_2
    //   201: invokespecial 151	gnu/mapping/WrongType:<init>	(Ljava/lang/ClassCastException;Ljava/lang/String;ILjava/lang/Object;)V
    //   204: athrow
    //   205: astore 8
    //   207: new 147	gnu/mapping/WrongType
    //   210: dup
    //   211: aload 8
    //   213: ldc 153
    //   215: iconst_1
    //   216: aload_2
    //   217: invokespecial 151	gnu/mapping/WrongType:<init>	(Ljava/lang/ClassCastException;Ljava/lang/String;ILjava/lang/Object;)V
    //   220: athrow
    //   221: astore 5
    //   223: new 147	gnu/mapping/WrongType
    //   226: dup
    //   227: aload 5
    //   229: ldc 184
    //   231: iconst_1
    //   232: aload_2
    //   233: invokespecial 151	gnu/mapping/WrongType:<init>	(Ljava/lang/ClassCastException;Ljava/lang/String;ILjava/lang/Object;)V
    //   236: athrow
    //
    // Exception table:
    //   from	to	target	type
    //   90	96	189	java/lang/ClassCastException
    //   114	120	205	java/lang/ClassCastException
    //   135	141	221	java/lang/ClassCastException
  }

  // ERROR //
  public Object apply4(ModuleMethod paramModuleMethod, Object paramObject1, Object paramObject2, Object paramObject3, Object paramObject4)
  {
    // Byte code:
    //   0: iconst_1
    //   1: istore 6
    //   3: aload_1
    //   4: getfield 18	gnu/expr/ModuleMethod:selector	I
    //   7: lookupswitch	default:+33->40, 10:+45->52, 15:+62->69, 16:+118->125
    //   41: aload_1
    //   42: aload_2
    //   43: aload_3
    //   44: aload 4
    //   46: aload 5
    //   48: invokespecial 188	gnu/expr/ModuleBody:apply4	(Lgnu/expr/ModuleMethod;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;
    //   51: areturn
    //   52: aload_0
    //   53: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   56: aload_2
    //   57: aload_3
    //   58: aload 4
    //   60: aload 5
    //   62: invokevirtual 192	appinventor/ai_jmpetters2/miskituisi/Screen3:addToComponents	(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V
    //   65: getstatic 37	gnu/mapping/Values:empty	Lgnu/mapping/Values;
    //   68: areturn
    //   69: aload_0
    //   70: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   73: astore 16
    //   75: aload_2
    //   76: checkcast 194	com/google/appinventor/components/runtime/Component
    //   79: astore 18
    //   81: aload_3
    //   82: checkcast 196	java/lang/String
    //   85: astore 20
    //   87: aload 4
    //   89: checkcast 196	java/lang/String
    //   92: astore 22
    //   94: aload 5
    //   96: checkcast 198	[Ljava/lang/Object;
    //   99: astore 24
    //   101: aload 16
    //   103: aload 18
    //   105: aload 20
    //   107: aload 22
    //   109: aload 24
    //   111: invokevirtual 202	appinventor/ai_jmpetters2/miskituisi/Screen3:dispatchEvent	(Lcom/google/appinventor/components/runtime/Component;Ljava/lang/String;Ljava/lang/String;[Ljava/lang/Object;)Z
    //   114: ifeq +7 -> 121
    //   117: getstatic 133	java/lang/Boolean:TRUE	Ljava/lang/Boolean;
    //   120: areturn
    //   121: getstatic 136	java/lang/Boolean:FALSE	Ljava/lang/Boolean;
    //   124: areturn
    //   125: aload_0
    //   126: getfield 28	appinventor/ai_jmpetters2/miskituisi/Screen3$frame:$main	Lappinventor/ai_jmpetters2/miskituisi/Screen3;
    //   129: astore 7
    //   131: aload_2
    //   132: checkcast 194	com/google/appinventor/components/runtime/Component
    //   135: astore 9
    //   137: aload_3
    //   138: checkcast 196	java/lang/String
    //   141: astore 11
    //   143: getstatic 136	java/lang/Boolean:FALSE	Ljava/lang/Boolean;
    //   146: astore 13
    //   148: aload 4
    //   150: aload 13
    //   152: if_acmpeq +27 -> 179
    //   155: aload 5
    //   157: checkcast 198	[Ljava/lang/Object;
    //   160: astore 15
    //   162: aload 7
    //   164: aload 9
    //   166: aload 11
    //   168: iload 6
    //   170: aload 15
    //   172: invokevirtual 206	appinventor/ai_jmpetters2/miskituisi/Screen3:dispatchGenericEvent	(Lcom/google/appinventor/components/runtime/Component;Ljava/lang/String;Z[Ljava/lang/Object;)V
    //   175: getstatic 37	gnu/mapping/Values:empty	Lgnu/mapping/Values;
    //   178: areturn
    //   179: iconst_0
    //   180: istore 6
    //   182: goto -27 -> 155
    //   185: astore 17
    //   187: new 147	gnu/mapping/WrongType
    //   190: dup
    //   191: aload 17
    //   193: ldc 207
    //   195: iload 6
    //   197: aload_2
    //   198: invokespecial 151	gnu/mapping/WrongType:<init>	(Ljava/lang/ClassCastException;Ljava/lang/String;ILjava/lang/Object;)V
    //   201: athrow
    //   202: astore 19
    //   204: new 147	gnu/mapping/WrongType
    //   207: dup
    //   208: aload 19
    //   210: ldc 207
    //   212: iconst_2
    //   213: aload_3
    //   214: invokespecial 151	gnu/mapping/WrongType:<init>	(Ljava/lang/ClassCastException;Ljava/lang/String;ILjava/lang/Object;)V
    //   217: athrow
    //   218: astore 21
    //   220: new 147	gnu/mapping/WrongType
    //   223: dup
    //   224: aload 21
    //   226: ldc 207
    //   228: iconst_3
    //   229: aload 4
    //   231: invokespecial 151	gnu/mapping/WrongType:<init>	(Ljava/lang/ClassCastException;Ljava/lang/String;ILjava/lang/Object;)V
    //   234: athrow
    //   235: astore 23
    //   237: new 147	gnu/mapping/WrongType
    //   240: dup
    //   241: aload 23
    //   243: ldc 207
    //   245: iconst_4
    //   246: aload 5
    //   248: invokespecial 151	gnu/mapping/WrongType:<init>	(Ljava/lang/ClassCastException;Ljava/lang/String;ILjava/lang/Object;)V
    //   251: athrow
    //   252: astore 8
    //   254: new 147	gnu/mapping/WrongType
    //   257: dup
    //   258: aload 8
    //   260: ldc 208
    //   262: iload 6
    //   264: aload_2
    //   265: invokespecial 151	gnu/mapping/WrongType:<init>	(Ljava/lang/ClassCastException;Ljava/lang/String;ILjava/lang/Object;)V
    //   268: athrow
    //   269: astore 10
    //   271: new 147	gnu/mapping/WrongType
    //   274: dup
    //   275: aload 10
    //   277: ldc 208
    //   279: iconst_2
    //   280: aload_3
    //   281: invokespecial 151	gnu/mapping/WrongType:<init>	(Ljava/lang/ClassCastException;Ljava/lang/String;ILjava/lang/Object;)V
    //   284: athrow
    //   285: astore 12
    //   287: new 147	gnu/mapping/WrongType
    //   290: dup
    //   291: aload 12
    //   293: ldc 208
    //   295: iconst_3
    //   296: aload 4
    //   298: invokespecial 151	gnu/mapping/WrongType:<init>	(Ljava/lang/ClassCastException;Ljava/lang/String;ILjava/lang/Object;)V
    //   301: athrow
    //   302: astore 14
    //   304: new 147	gnu/mapping/WrongType
    //   307: dup
    //   308: aload 14
    //   310: ldc 208
    //   312: iconst_4
    //   313: aload 5
    //   315: invokespecial 151	gnu/mapping/WrongType:<init>	(Ljava/lang/ClassCastException;Ljava/lang/String;ILjava/lang/Object;)V
    //   318: athrow
    //
    // Exception table:
    //   from	to	target	type
    //   75	81	185	java/lang/ClassCastException
    //   81	87	202	java/lang/ClassCastException
    //   87	94	218	java/lang/ClassCastException
    //   94	101	235	java/lang/ClassCastException
    //   131	137	252	java/lang/ClassCastException
    //   137	143	269	java/lang/ClassCastException
    //   143	148	285	java/lang/ClassCastException
    //   155	162	302	java/lang/ClassCastException
  }

  public int match0(ModuleMethod paramModuleMethod, CallContext paramCallContext)
  {
    switch (paramModuleMethod.selector)
    {
    default:
      return super.match0(paramModuleMethod, paramCallContext);
    case 39:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 38:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 37:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 36:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 35:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 34:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 33:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 32:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 31:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 30:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 29:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 28:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 27:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 26:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 25:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 24:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 23:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 22:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 21:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 20:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 19:
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 0;
      return 0;
    case 18:
    }
    paramCallContext.proc = paramModuleMethod;
    paramCallContext.pc = 0;
    return 0;
  }

  public int match1(ModuleMethod paramModuleMethod, Object paramObject, CallContext paramCallContext)
  {
    int i = -786431;
    switch (paramModuleMethod.selector)
    {
    case 4:
    case 6:
    case 8:
    case 9:
    case 10:
    case 11:
    default:
      i = super.match1(paramModuleMethod, paramObject, paramCallContext);
    case 14:
    case 13:
    case 12:
    case 7:
    case 5:
    case 3:
    case 2:
      do
      {
        do
        {
          do
          {
            do
              return i;
            while (!(paramObject instanceof Screen3));
            paramCallContext.value1 = paramObject;
            paramCallContext.proc = paramModuleMethod;
            paramCallContext.pc = 1;
            return 0;
            paramCallContext.value1 = paramObject;
            paramCallContext.proc = paramModuleMethod;
            paramCallContext.pc = 1;
            return 0;
            paramCallContext.value1 = paramObject;
            paramCallContext.proc = paramModuleMethod;
            paramCallContext.pc = 1;
            return 0;
          }
          while (!(paramObject instanceof Symbol));
          paramCallContext.value1 = paramObject;
          paramCallContext.proc = paramModuleMethod;
          paramCallContext.pc = 1;
          return 0;
        }
        while (!(paramObject instanceof Symbol));
        paramCallContext.value1 = paramObject;
        paramCallContext.proc = paramModuleMethod;
        paramCallContext.pc = 1;
        return 0;
        paramCallContext.value1 = paramObject;
        paramCallContext.proc = paramModuleMethod;
        paramCallContext.pc = 1;
        return 0;
      }
      while (!(paramObject instanceof Screen3));
      paramCallContext.value1 = paramObject;
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 1;
      return 0;
    case 1:
    }
    paramCallContext.value1 = paramObject;
    paramCallContext.proc = paramModuleMethod;
    paramCallContext.pc = 1;
    return 0;
  }

  public int match2(ModuleMethod paramModuleMethod, Object paramObject1, Object paramObject2, CallContext paramCallContext)
  {
    switch (paramModuleMethod.selector)
    {
    case 6:
    case 7:
    case 10:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    default:
      return super.match2(paramModuleMethod, paramObject1, paramObject2, paramCallContext);
    case 17:
      paramCallContext.value1 = paramObject1;
      paramCallContext.value2 = paramObject2;
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 2;
      return 0;
    case 11:
      paramCallContext.value1 = paramObject1;
      paramCallContext.value2 = paramObject2;
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 2;
      return 0;
    case 9:
      paramCallContext.value1 = paramObject1;
      paramCallContext.value2 = paramObject2;
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 2;
      return 0;
    case 8:
      if (!(paramObject1 instanceof Symbol))
        return -786431;
      paramCallContext.value1 = paramObject1;
      paramCallContext.value2 = paramObject2;
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 2;
      return 0;
    case 5:
      if (!(paramObject1 instanceof Symbol))
        return -786431;
      paramCallContext.value1 = paramObject1;
      paramCallContext.value2 = paramObject2;
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 2;
      return 0;
    case 4:
    }
    if (!(paramObject1 instanceof Symbol))
      return -786431;
    paramCallContext.value1 = paramObject1;
    paramCallContext.value2 = paramObject2;
    paramCallContext.proc = paramModuleMethod;
    paramCallContext.pc = 2;
    return 0;
  }

  public int match4(ModuleMethod paramModuleMethod, Object paramObject1, Object paramObject2, Object paramObject3, Object paramObject4, CallContext paramCallContext)
  {
    int i = -786431;
    switch (paramModuleMethod.selector)
    {
    default:
      i = super.match4(paramModuleMethod, paramObject1, paramObject2, paramObject3, paramObject4, paramCallContext);
    case 16:
    case 15:
      do
      {
        do
          return i;
        while (!(paramObject1 instanceof Screen3));
        paramCallContext.value1 = paramObject1;
        if (!(paramObject2 instanceof Component))
          return -786430;
        paramCallContext.value2 = paramObject2;
        if (!(paramObject3 instanceof String))
          return -786429;
        paramCallContext.value3 = paramObject3;
        paramCallContext.value4 = paramObject4;
        paramCallContext.proc = paramModuleMethod;
        paramCallContext.pc = 4;
        return 0;
      }
      while (!(paramObject1 instanceof Screen3));
      paramCallContext.value1 = paramObject1;
      if (!(paramObject2 instanceof Component))
        return -786430;
      paramCallContext.value2 = paramObject2;
      if (!(paramObject3 instanceof String))
        return -786429;
      paramCallContext.value3 = paramObject3;
      if (!(paramObject4 instanceof String))
        return -786428;
      paramCallContext.value4 = paramObject4;
      paramCallContext.proc = paramModuleMethod;
      paramCallContext.pc = 4;
      return 0;
    case 10:
    }
    paramCallContext.value1 = paramObject1;
    paramCallContext.value2 = paramObject2;
    paramCallContext.value3 = paramObject3;
    paramCallContext.value4 = paramObject4;
    paramCallContext.proc = paramModuleMethod;
    paramCallContext.pc = 4;
    return 0;
  }
}