[memo]

状態管理は、各チームが管理する。
グローバル状態管理は、app-shellが担当する。
状態のやり取りは、イベントフローでハンドリングする。(pub/sub)
これは、シングルストアの概念を持つReduxの流れを参考にしたい。

SSIによるSSRと、Fragument.jsをincludeすることによるSPAを実現したい。