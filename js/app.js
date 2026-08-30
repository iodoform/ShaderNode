    // ── ノード定義とカテゴリ ──
    const NODE_DEFINITIONS = {
      uv: {
        type: 'uv',
        title: 'Texture Coordinate (UV)',
        category: 'input',
        color: '#fbc02d',
        outputs: [{ id: 'uv', label: 'UV Vec2', type: 'vec2' }]
      },
      time: {
        type: 'time',
        title: 'Time (Animation)',
        category: 'input',
        color: '#fbc02d',
        outputs: [{ id: 'time', label: 'Time Value', type: 'float' }]
      },
      colorConst: {
        type: 'colorConst',
        title: 'RGB Color Constant',
        category: 'input',
        color: '#fbc02d',
        controls: [{ id: 'color', type: 'color', default: '#3498db', label: 'Color' }],
        outputs: [{ id: 'color', label: 'Color Vec3', type: 'vec3' }]
      },
      valueConst: {
        type: 'valueConst',
        title: 'Value Constant',
        category: 'input',
        color: '#fbc02d',
        controls: [{ id: 'value', type: 'number', default: 1.0, step: 0.1, label: 'Value' }],
        outputs: [{ id: 'val', label: 'Value Float', type: 'float' }]
      },
      perlin: {
        type: 'perlin',
        title: 'Noise Texture (Perlin)',
        category: 'texture',
        color: '#4caf50',
        inputs: [
          { id: 'uv', label: 'Vector (UV)', type: 'vec2', default: 'uv' },
          { id: 'scale', label: 'Scale', type: 'float', default: 5.0 }
        ],
        outputs: [{ id: 'fac', label: 'Fac (Noise)', type: 'float' }]
      },
      voronoi: {
        type: 'voronoi',
        title: 'Voronoi Texture',
        category: 'texture',
        color: '#4caf50',
        inputs: [
          { id: 'uv', label: 'Vector (UV)', type: 'vec2', default: 'uv' },
          { id: 'scale', label: 'Scale', type: 'float', default: 8.0 }
        ],
        outputs: [{ id: 'fac', label: 'Distance', type: 'float' }]
      },
      checker: {
        type: 'checker',
        title: 'Checker Pattern',
        category: 'texture',
        color: '#4caf50',
        inputs: [
          { id: 'uv', label: 'Vector (UV)', type: 'vec2', default: 'uv' },
          { id: 'scale', label: 'Scale', type: 'float', default: 10.0 }
        ],
        outputs: [{ id: 'fac', label: 'Fac (0 or 1)', type: 'float' }]
      },
      math: {
        type: 'math',
        title: 'Math (Arithmetic)',
        category: 'math',
        color: '#2196f3',
        controls: [
          {
            id: 'op', type: 'select', label: 'Operation',
            options: [
              { val: 'ADD', label: 'Add (+)' },
              { val: 'SUB', label: 'Subtract (-)' },
              { val: 'MUL', label: 'Multiply (*)' },
              { val: 'DIV', label: 'Divide (/)' },
              { val: 'MAD', label: 'Multiply Add (a*b+c)' },
              { val: 'POWER', label: 'Power (pow)' },
              { val: 'LOG', label: 'Logarithm (log)' },
              { val: 'SQRT', label: 'Square Root (sqrt)' },
              { val: 'INVSQRT', label: 'Inverse Sqrt (1/sqrt)' },
              { val: 'ABS', label: 'Absolute (abs)' },
              { val: 'EXP', label: 'Exponent (exp)' },
              { val: 'MIN', label: 'Minimum' },
              { val: 'MAX', label: 'Maximum' },
              { val: 'LESS', label: 'Less Than (<)' },
              { val: 'GREATER', label: 'Greater Than (>)' },
              { val: 'SIGN', label: 'Sign' },
              { val: 'COMPARE', label: 'Compare' },
              { val: 'SMOOTH_MIN', label: 'Smooth Minimum' },
              { val: 'SMOOTH_MAX', label: 'Smooth Maximum' },
              { val: 'ROUND', label: 'Round' },
              { val: 'FLOOR', label: 'Floor' },
              { val: 'CEIL', label: 'Ceil' },
              { val: 'TRUNC', label: 'Truncate' },
              { val: 'FRACT', label: 'Fraction' },
              { val: 'MOD', label: 'Modulo' },
              { val: 'WRAP', label: 'Wrap' },
              { val: 'SNAP', label: 'Snap' },
              { val: 'PINGPONG', label: 'PingPong' },
              { val: 'SIN', label: 'Sine (sin)' },
              { val: 'COS', label: 'Cosine (cos)' },
              { val: 'TAN', label: 'Tangent (tan)' },
              { val: 'ASIN', label: 'Arcsine (asin)' },
              { val: 'ACOS', label: 'Arccosine (acos)' },
              { val: 'ATAN', label: 'Arctangent (atan)' },
              { val: 'ATAN2', label: 'Arctan2' },
              { val: 'RADIANS', label: 'To Radians' },
              { val: 'DEGREES', label: 'To Degrees' }
            ],
            default: 'ADD'
          }
        ],
        inputs: [
          { id: 'a', label: 'Val A', type: 'float', default: 0.0 },
          { id: 'b', label: 'Val B', type: 'float', default: 0.0 },
          { id: 'c', label: 'Val C', type: 'float', default: 0.0 }
        ],
        outputs: [{ id: 'val', label: 'Result', type: 'float' }]
      },
      vectorMath: {
        type: 'vectorMath',
        title: 'Vector Math',
        category: 'vector',
        color: '#3f51b5',
        controls: [
          {
            id: 'op', type: 'select', label: 'Operation',
            options: [
              { val: 'ADD', label: 'Add (+)' },
              { val: 'SUB', label: 'Subtract (-)' },
              { val: 'MUL', label: 'Multiply (*)' },
              { val: 'DIV', label: 'Divide (/)' },
              { val: 'CROSS', label: 'Cross Product' },
              { val: 'DOT', label: 'Dot Product' },
              { val: 'DISTANCE', label: 'Distance' },
              { val: 'LENGTH', label: 'Length' },
              { val: 'SCALE', label: 'Scale' },
              { val: 'NORMALIZE', label: 'Normalize' },
              { val: 'ABS', label: 'Absolute' },
              { val: 'MIN', label: 'Minimum' },
              { val: 'MAX', label: 'Maximum' },
              { val: 'FLOOR', label: 'Floor' },
              { val: 'CEIL', label: 'Ceil' },
              { val: 'FRACT', label: 'Fraction' },
              { val: 'MOD', label: 'Modulo' },
              { val: 'SIN', label: 'Sine' },
              { val: 'COS', label: 'Cosine' },
              { val: 'TAN', label: 'Tangent' },
              { val: 'REFLECT', label: 'Reflect' }
            ],
            default: 'ADD'
          }
        ],
        inputs: [
          { id: 'a', label: 'Vector A', type: 'vec3', default: 'vec3(0.0)' },
          { id: 'b', label: 'Vector B', type: 'vec3', default: 'vec3(0.0)' },
          { id: 'scale', label: 'Scale / Val', type: 'float', default: 1.0 }
        ],
        outputs: [
          { id: 'vec', label: 'Vector Out', type: 'vec3' },
          { id: 'val', label: 'Value Out', type: 'float' }
        ]
      },
      mix: {
        type: 'mix',
        title: 'Mix / Lerp',
        category: 'math',
        color: '#2196f3',
        inputs: [
          { id: 'fac', label: 'Factor', type: 'float', default: 0.5 },
          { id: 'a', label: 'Color/Val A', type: 'vec3', default: 'vec3(0.0)' },
          { id: 'b', label: 'Color/Val B', type: 'vec3', default: 'vec3(1.0)' }
        ],
        outputs: [{ id: 'out', label: 'Result', type: 'vec3' }]
      },
      colorRamp: {
        type: 'colorRamp',
        title: 'Color Ramp',
        category: 'color',
        color: '#9c27b0',
        isCustomUI: true,
        controls: [
          {
            id: 'interp', type: 'select', label: 'Interpolation',
            options: [
              { val: 'LINEAR', label: 'Linear' },
              { val: 'EASE', label: 'Ease' },
              { val: 'CONSTANT', label: 'Constant' }
            ],
            default: 'LINEAR'
          }
        ],
        inputs: [{ id: 'fac', label: 'Fac', type: 'float', default: 0.5 }],
        outputs: [
          { id: 'color', label: 'Color Vec3', type: 'vec3' },
          { id: 'alpha', label: 'Alpha Float', type: 'float' }
        ]
      },
      combineRgb: {
        type: 'combineRgb',
        title: 'Combine RGB',
        category: 'color',
        color: '#9c27b0',
        inputs: [
          { id: 'r', label: 'Red (R)', type: 'float', default: 0.0 },
          { id: 'g', label: 'Green (G)', type: 'float', default: 0.0 },
          { id: 'b', label: 'Blue (B)', type: 'float', default: 0.0 }
        ],
        outputs: [{ id: 'color', label: 'Color Vec3', type: 'vec3' }]
      },
      separateRgb: {
        type: 'separateRgb',
        title: 'Separate RGB',
        category: 'color',
        color: '#9c27b0',
        inputs: [{ id: 'color', label: 'Color Vec3', type: 'vec3', default: 'vec3(1.0)' }],
        outputs: [
          { id: 'r', label: 'Red (R)', type: 'float' },
          { id: 'g', label: 'Green (G)', type: 'float' },
          { id: 'b', label: 'Blue (B)', type: 'float' }
        ]
      },
      output: {
        type: 'output',
        title: 'Surface Output',
        category: 'output',
        color: '#f44336',
        inputs: [{ id: 'color', label: 'Surface Color', type: 'vec3', default: 'vec3(0.1)' }],
        isOutputNode: true
      },
      viewer: {
        type: 'viewer',
        title: 'Viewer',
        category: 'viewer',
        color: '#ff9800',
        // 入出力の型は接続元に応じて動的に解決される（getEffectiveInputs/Outputs参照）
        inputs: [{ id: 'in', label: 'Value', type: 'vec3', default: 'vec3(0.0)' }],
        outputs: [{ id: 'out', label: 'Value', type: 'vec3' }]
      }
    };

    // Mathノードの演算子ごとに実際に使用する入力(a/b/c)の数
    const MATH_OP_ARITY = {
      ADD: 2, SUB: 2, MUL: 2, DIV: 2, MAD: 3, POWER: 2, LOG: 1, SQRT: 1, INVSQRT: 1,
      ABS: 1, EXP: 1, MIN: 2, MAX: 2, LESS: 2, GREATER: 2, SIGN: 1, COMPARE: 3,
      SMOOTH_MIN: 3, SMOOTH_MAX: 3, ROUND: 1, FLOOR: 1, CEIL: 1, TRUNC: 1, FRACT: 1,
      MOD: 2, WRAP: 3, SNAP: 2, PINGPONG: 2, SIN: 1, COS: 1, TAN: 1, ASIN: 1, ACOS: 1,
      ATAN: 1, ATAN2: 2, RADIANS: 1, DEGREES: 1
    };

    // Vector Mathノードの演算子ごとに使用する入力ソケットと出力ソケット種別
    const VECTOR_MATH_OP_SPEC = {
      ADD: { inputs: ['a', 'b'], output: 'vec' },
      SUB: { inputs: ['a', 'b'], output: 'vec' },
      MUL: { inputs: ['a', 'b'], output: 'vec' },
      DIV: { inputs: ['a', 'b'], output: 'vec' },
      CROSS: { inputs: ['a', 'b'], output: 'vec' },
      DOT: { inputs: ['a', 'b'], output: 'val' },
      DISTANCE: { inputs: ['a', 'b'], output: 'val' },
      LENGTH: { inputs: ['a'], output: 'val' },
      SCALE: { inputs: ['a', 'scale'], output: 'vec' },
      NORMALIZE: { inputs: ['a'], output: 'vec' },
      ABS: { inputs: ['a'], output: 'vec' },
      MIN: { inputs: ['a', 'b'], output: 'vec' },
      MAX: { inputs: ['a', 'b'], output: 'vec' },
      FLOOR: { inputs: ['a'], output: 'vec' },
      CEIL: { inputs: ['a'], output: 'vec' },
      FRACT: { inputs: ['a'], output: 'vec' },
      MOD: { inputs: ['a', 'b'], output: 'vec' },
      SIN: { inputs: ['a'], output: 'vec' },
      COS: { inputs: ['a'], output: 'vec' },
      TAN: { inputs: ['a'], output: 'vec' },
      REFLECT: { inputs: ['a', 'b'], output: 'vec' }
    };

    // ノードの種類・現在の設定に応じて実際に表示/使用すべき入力ソケット一覧を返す
    function getEffectiveInputs(node) {
      const def = NODE_DEFINITIONS[node.type];
      if (!def) return [];

      if (node.type === 'math') {
        const op = (node.controlsVal && node.controlsVal.op) || 'ADD';
        const arity = MATH_OP_ARITY[op] || 2;
        return def.inputs.slice(0, arity);
      }

      if (node.type === 'vectorMath') {
        const op = (node.controlsVal && node.controlsVal.op) || 'ADD';
        const spec = VECTOR_MATH_OP_SPEC[op] || { inputs: ['a', 'b'] };
        return spec.inputs.map(id => def.inputs.find(i => i.id === id)).filter(Boolean);
      }

      if (node.type === 'viewer') {
        return [{ id: 'in', label: 'Value', type: resolveViewerType(node) }];
      }

      return def.inputs || [];
    }

    // ノードの種類・現在の設定に応じて実際に表示/使用すべき出力ソケット一覧を返す
    function getEffectiveOutputs(node) {
      const def = NODE_DEFINITIONS[node.type];
      if (!def) return [];

      if (node.type === 'vectorMath') {
        const op = (node.controlsVal && node.controlsVal.op) || 'ADD';
        const spec = VECTOR_MATH_OP_SPEC[op] || { output: 'vec' };
        return def.outputs.filter(o => o.id === spec.output);
      }

      if (node.type === 'viewer') {
        return [{ id: 'out', label: 'Value', type: resolveViewerType(node) }];
      }

      return def.outputs || [];
    }

    // Viewerノードの入出力型を、現在接続されている上流ソケットの型から解決する
    function resolveViewerType(node) {
      if (!graph) return 'vec3';
      const conn = graph.connections.find(c => c.toNode === node.id && c.toSocket === 'in');
      if (!conn) return 'vec3';
      const fromNode = graph.nodes.find(n => n.id === conn.fromNode);
      if (!fromNode) return 'vec3';
      const outs = getEffectiveOutputs(fromNode);
      const outSocket = outs.find(o => o.id === conn.fromSocket);
      return outSocket ? outSocket.type : 'vec3';
    }

    // ── アプリケーション状態 ──
    class ShaderNodeGraph {
      constructor() {
        this.nodes = [];
        this.connections = [];
        this.nextId = 1;
        
        this.selectedNodeIds = new Set();
        this.clipboard = null;

        this.panX = 0;
        this.panY = 0;
        this.zoom = 1.0;
        this.isPanning = false;
        this.panStart = { x: 0, y: 0 };

        this.draggingNodes = [];
        this.dragStartWorld = { x: 0, y: 0 };

        this.isBoxSelecting = false;
        this.boxStartScreen = { x: 0, y: 0 };
        this.boxStartWorld = { x: 0, y: 0 };

        this.connectingSocket = null;
        this.tempWirePos = { x: 0, y: 0 };

        // ── タッチ操作用の状態 ──
        this.touchSelectMode = false;
        this.pinchState = null;
        // タッチ操作直後にブラウザが合成する「ゴーストmousedown」を無視するための記録
        this.lastTouchTs = 0;

        this.wrapperEl = document.getElementById('nodeWrapper');
        this.svgEl = document.getElementById('svgConnections');
        this.containerEl = document.getElementById('canvasContainer');
        this.selectionBoxEl = document.getElementById('selectionBox');

        this.initEventListeners();
        this.initKeyboardShortcuts();
        this.initTouchEventListeners();
        this.updateTransform();
      }

      initEventListeners() {
        this.containerEl.addEventListener('wheel', (e) => {
          e.preventDefault();
          const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
          const newZoom = Math.min(Math.max(this.zoom * zoomFactor, 0.25), 2.5);

          const rect = this.containerEl.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;

          this.panX = mouseX - (mouseX - this.panX) * (newZoom / this.zoom);
          this.panY = mouseY - (mouseY - this.panY) * (newZoom / this.zoom);
          this.zoom = newZoom;

          this.updateTransform();
          this.updateWires();
        }, { passive: false });

        this.containerEl.addEventListener('mousedown', (e) => {
          // タッチ操作の直後にブラウザが送ってくる合成mousedownは無視する（矩形選択の暴発を防ぐ）
          if (Date.now() - this.lastTouchTs < 600) return;

          const isMiddleButton = e.button === 1;
          const isAltLeftClick = e.button === 0 && e.altKey;
          const isBackgroundClick = e.target === this.containerEl || e.target === this.svgEl;

          if (isMiddleButton || isAltLeftClick) {
            this.isPanning = true;
            this.panStart = { x: e.clientX - this.panX, y: e.clientY - this.panY };
            this.containerEl.style.cursor = 'grabbing';
            e.preventDefault();
          } else if (isBackgroundClick && e.button === 0) {
            if (e.shiftKey) {
              this.startBoxSelection(e);
            } else {
              this.deselectAll();
              this.startBoxSelection(e);
            }
          }
        });

        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
        window.addEventListener('mouseup', (e) => this.onMouseUp(e));

        document.getElementById('btnZoomIn').addEventListener('click', () => this.zoomAtCenter(1.2));
        document.getElementById('btnZoomOut').addEventListener('click', () => this.zoomAtCenter(1 / 1.2));
        document.getElementById('btnZoomReset').addEventListener('click', () => {
          this.panX = 0;
          this.panY = 0;
          this.zoom = 1.0;
          this.updateTransform();
          this.updateWires();
        });
      }

      initKeyboardShortcuts() {
        window.addEventListener('keydown', (e) => {
          const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
          if (activeTag === 'input' || activeTag === 'select' || activeTag === 'textarea') {
            return;
          }

          const key = e.key.toLowerCase();

          if (key === 'a' && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            this.toggleSelectAll();
          }

          if (e.shiftKey && key === 'd') {
            e.preventDefault();
            this.duplicateSelectedNodes();
          }

          if (key === 'delete' || key === 'x') {
            e.preventDefault();
            this.deleteSelectedNodes();
          }

          if (key === 'b' && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            this.setTouchSelectMode(!this.touchSelectMode);
          }

          if ((e.ctrlKey || e.metaKey) && key === 'c') {
            e.preventDefault();
            this.copySelectedNodes();
          }

          if ((e.ctrlKey || e.metaKey) && key === 'v') {
            e.preventDefault();
            this.pasteNodes();
          }
        });
      }

      // ── iPad等のタッチ操作対応 ──
      // 1本指: 背景ドラッグでパン（矩形選択モード時は範囲選択）/ ノード・ソケットのドラッグは各要素のtouchstartが処理
      // 2本指: ピンチでズーム、ドラッグでパン
      initTouchEventListeners() {
        const toSyntheticEvent = (touch, extra = {}) => ({
          clientX: touch.clientX,
          clientY: touch.clientY,
          shiftKey: false,
          button: 0,
          ...extra
        });

        // どこがタッチされても、合成マウスイベント除去のために最終タッチ時刻を記録する（キャプチャフェーズで確実に先に実行）
        document.addEventListener('touchstart', () => {
          this.lastTouchTs = Date.now();
        }, { passive: true, capture: true });

        this.containerEl.addEventListener('touchstart', (e) => {
          if (e.touches.length === 1) {
            const target = e.target;
            const isBackgroundTouch = target === this.containerEl || target === this.svgEl;
            if (!isBackgroundTouch) return;

            e.preventDefault();
            const t = e.touches[0];
            if (this.touchSelectMode) {
              this.deselectAll();
              this.startBoxSelection(toSyntheticEvent(t));
            } else {
              this.isPanning = true;
              this.panStart = { x: t.clientX - this.panX, y: t.clientY - this.panY };
            }
          } else if (e.touches.length === 2) {
            e.preventDefault();
            this.isPanning = false;
            this.isBoxSelecting = false;
            if (this.selectionBoxEl) this.selectionBoxEl.style.display = 'none';
            this.startPinch(e);
          }
        }, { passive: false });

        this.containerEl.addEventListener('touchmove', (e) => {
          if (e.touches.length === 2) {
            e.preventDefault();
            this.updatePinch(e);
          }
        }, { passive: false });

        this.containerEl.addEventListener('touchend', (e) => {
          if (e.touches.length < 2) this.pinchState = null;
        });
        this.containerEl.addEventListener('touchcancel', (e) => {
          if (e.touches.length < 2) this.pinchState = null;
        });

        // ノードドラッグ／ソケット接続／背景パン／矩形選択の続き（mousemove/mouseupと同じ状態を利用）
        window.addEventListener('touchmove', (e) => {
          if (e.touches.length !== 1) return;
          if (!(this.isPanning || this.isBoxSelecting || this.draggingNodes.length > 0 || this.connectingSocket)) return;
          e.preventDefault();
          this.onMouseMove(toSyntheticEvent(e.touches[0]));
        }, { passive: false });

        window.addEventListener('touchend', (e) => {
          if (!(this.isPanning || this.isBoxSelecting || this.draggingNodes.length > 0 || this.connectingSocket)) return;
          const t = e.changedTouches[0];
          this.onMouseUp(toSyntheticEvent(t || { clientX: 0, clientY: 0 }));
        });
        window.addEventListener('touchcancel', (e) => {
          if (!(this.isPanning || this.isBoxSelecting || this.draggingNodes.length > 0 || this.connectingSocket)) return;
          const t = e.changedTouches[0];
          this.onMouseUp(toSyntheticEvent(t || { clientX: 0, clientY: 0 }));
        });
      }

      setTouchSelectMode(enabled) {
        this.touchSelectMode = enabled;
        const btn = document.getElementById('btnToggleSelect');
        if (btn) btn.classList.toggle('active', enabled);
        showToast(enabled ? '矩形選択モード ON（ドラッグでエリア選択）' : '矩形選択モード OFF（ドラッグで画面移動）');
      }

      startPinch(e) {
        const [t1, t2] = e.touches;
        const rect = this.containerEl.getBoundingClientRect();
        this.pinchState = {
          startDist: Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY),
          startZoom: this.zoom,
          startPanX: this.panX,
          startPanY: this.panY,
          centerX: (t1.clientX + t2.clientX) / 2 - rect.left,
          centerY: (t1.clientY + t2.clientY) / 2 - rect.top
        };
      }

      updatePinch(e) {
        if (!this.pinchState || e.touches.length !== 2) return;
        const [t1, t2] = e.touches;
        const rect = this.containerEl.getBoundingClientRect();
        const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
        const centerX = (t1.clientX + t2.clientX) / 2 - rect.left;
        const centerY = (t1.clientY + t2.clientY) / 2 - rect.top;

        const newZoom = Math.min(Math.max(this.pinchState.startZoom * (dist / this.pinchState.startDist), 0.25), 2.5);

        const worldX = (this.pinchState.centerX - this.pinchState.startPanX) / this.pinchState.startZoom;
        const worldY = (this.pinchState.centerY - this.pinchState.startPanY) / this.pinchState.startZoom;

        this.panX = centerX - worldX * newZoom;
        this.panY = centerY - worldY * newZoom;
        this.zoom = newZoom;

        this.updateTransform();
        this.updateWires();
      }

      screenToWorld(clientX, clientY) {
        const rect = this.containerEl.getBoundingClientRect();
        return {
          x: (clientX - rect.left - this.panX) / this.zoom,
          y: (clientY - rect.top - this.panY) / this.zoom
        };
      }

      zoomAtCenter(factor) {
        const rect = this.containerEl.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const newZoom = Math.min(Math.max(this.zoom * factor, 0.25), 2.5);

        this.panX = centerX - (centerX - this.panX) * (newZoom / this.zoom);
        this.panY = centerY - (centerY - this.panY) * (newZoom / this.zoom);
        this.zoom = newZoom;

        this.updateTransform();
        this.updateWires();
      }

      updateTransform() {
        const transformStr = `translate(${this.panX}px, ${this.panY}px) scale(${this.zoom})`;
        this.wrapperEl.style.transform = transformStr;
        this.wrapperEl.style.transformOrigin = '0 0';
        this.svgEl.style.transform = transformStr;
        this.svgEl.style.transformOrigin = '0 0';

        const bgSize = 20 * this.zoom;
        this.containerEl.style.backgroundSize = `${bgSize}px ${bgSize}px`;
        this.containerEl.style.backgroundPosition = `${this.panX}px ${this.panY}px`;

        const zoomText = document.getElementById('zoomLevelText');
        if (zoomText) zoomText.textContent = `${Math.round(this.zoom * 100)}%`;
      }

      createNode(type, x = 100, y = 100) {
        const def = NODE_DEFINITIONS[type];
        if (!def) return null;

        const node = {
          id: `node_${this.nextId++}`,
          type: type,
          title: def.title,
          x: x,
          y: y,
          controlsVal: {},
          inputsVal: {}
        };

        if (def.controls) {
          def.controls.forEach(c => {
            node.controlsVal[c.id] = c.default;
          });
        }

        if (type === 'colorRamp') {
          node.stops = [
            { pos: 0.0, color: '#000000' },
            { pos: 1.0, color: '#ffffff' }
          ];
          node.activeStopIndex = 0;
        }

        this.nodes.push(node);
        this.renderNode(node);
        this.selectNode(node.id, false);
        this.updateGraph();
        return node;
      }

      selectNode(nodeId, append = false, toggle = false) {
        if (!append && !toggle) {
          this.selectedNodeIds.clear();
          if (nodeId) this.selectedNodeIds.add(nodeId);
        } else if (toggle) {
          if (this.selectedNodeIds.has(nodeId)) {
            this.selectedNodeIds.delete(nodeId);
          } else {
            this.selectedNodeIds.add(nodeId);
          }
        } else if (append) {
          if (nodeId) this.selectedNodeIds.add(nodeId);
        }

        this.updateNodeSelectionUI();
      }

      deselectAll() {
        this.selectedNodeIds.clear();
        this.updateNodeSelectionUI();
      }

      toggleSelectAll() {
        if (this.selectedNodeIds.size === this.nodes.length) {
          this.deselectAll();
        } else {
          this.nodes.forEach(n => this.selectedNodeIds.add(n.id));
          this.updateNodeSelectionUI();
        }
      }

      updateNodeSelectionUI() {
        document.querySelectorAll('.node').forEach(el => {
          if (this.selectedNodeIds.has(el.id)) {
            el.classList.add('selected');
          } else {
            el.classList.remove('selected');
          }
        });
      }

      startBoxSelection(e) {
        this.isBoxSelecting = true;
        const rect = this.containerEl.getBoundingClientRect();
        this.boxStartScreen = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
        this.boxStartWorld = this.screenToWorld(e.clientX, e.clientY);

        this.selectionBoxEl.style.display = 'block';
        this.selectionBoxEl.style.left = `${this.boxStartScreen.x}px`;
        this.selectionBoxEl.style.top = `${this.boxStartScreen.y}px`;
        this.selectionBoxEl.style.width = '0px';
        this.selectionBoxEl.style.height = '0px';
      }

      updateBoxSelection(e) {
        if (!this.isBoxSelecting) return;

        const rect = this.containerEl.getBoundingClientRect();
        const currentScreenX = e.clientX - rect.left;
        const currentScreenY = e.clientY - rect.top;

        const x = Math.min(this.boxStartScreen.x, currentScreenX);
        const y = Math.min(this.boxStartScreen.y, currentScreenY);
        const w = Math.abs(currentScreenX - this.boxStartScreen.x);
        const h = Math.abs(currentScreenY - this.boxStartScreen.y);

        this.selectionBoxEl.style.left = `${x}px`;
        this.selectionBoxEl.style.top = `${y}px`;
        this.selectionBoxEl.style.width = `${w}px`;
        this.selectionBoxEl.style.height = `${h}px`;

        const currentWorld = this.screenToWorld(e.clientX, e.clientY);
        const minX = Math.min(this.boxStartWorld.x, currentWorld.x);
        const maxX = Math.max(this.boxStartWorld.x, currentWorld.x);
        const minY = Math.min(this.boxStartWorld.y, currentWorld.y);
        const maxY = Math.max(this.boxStartWorld.y, currentWorld.y);

        this.nodes.forEach(node => {
          const nodeWidth = 190;
          const nodeHeight = 140;
          const isIntersecting = !(
            node.x + nodeWidth < minX ||
            node.x > maxX ||
            node.y + nodeHeight < minY ||
            node.y > maxY
          );

          if (isIntersecting) {
            this.selectedNodeIds.add(node.id);
          } else if (!e.shiftKey) {
            this.selectedNodeIds.delete(node.id);
          }
        });

        this.updateNodeSelectionUI();
      }

      endBoxSelection() {
        this.isBoxSelecting = false;
        this.selectionBoxEl.style.display = 'none';
      }

      deleteSelectedNodes() {
        const toDelete = Array.from(this.selectedNodeIds);
        let deletedCount = 0;
        const survivorsToRefresh = new Set();

        toDelete.forEach(nodeId => {
          const node = this.nodes.find(n => n.id === nodeId);
          if (node && !NODE_DEFINITIONS[node.type].isOutputNode) {
            this.connections.forEach(c => {
              // 削除されるノードに繋がっていた相手側は手動入力欄が復活するため再描画対象にする
              if (c.fromNode === nodeId && !toDelete.includes(c.toNode)) survivorsToRefresh.add(c.toNode);
              if (c.toNode === nodeId && !toDelete.includes(c.fromNode)) survivorsToRefresh.add(c.fromNode);
            });

            this.connections = this.connections.filter(
              c => !(c.fromNode === nodeId || c.toNode === nodeId)
            );
            this.nodes = this.nodes.filter(n => n.id !== nodeId);
            const el = document.getElementById(nodeId);
            if (el) el.remove();
            compiler.removeViewerRenderer(nodeId);

            this.selectedNodeIds.delete(nodeId);
            deletedCount++;
          }
        });

        survivorsToRefresh.forEach(id => {
          const n = this.nodes.find(x => x.id === id);
          if (n) this.renderNode(n);
        });

        if (deletedCount > 0) {
          showToast(`${deletedCount} 個のノードを削除しました`);
          this.updateGraph();
        } else if (toDelete.length > 0) {
          showToast('出力ノードは削除できません');
        }
      }

      duplicateSelectedNodes() {
        if (this.selectedNodeIds.size === 0) return;

        const newSelectedIds = new Set();
        const idMap = new Map();

        this.selectedNodeIds.forEach(nodeId => {
          const original = this.nodes.find(n => n.id === nodeId);
          if (!original) return;
          const def = NODE_DEFINITIONS[original.type];
          if (def.isOutputNode) return;

          const newNode = {
            id: `node_${this.nextId++}`,
            type: original.type,
            title: original.title,
            x: original.x + 30,
            y: original.y + 30,
            controlsVal: JSON.parse(JSON.stringify(original.controlsVal)),
            inputsVal: JSON.parse(JSON.stringify(original.inputsVal))
          };
          if (original.stops) {
            newNode.stops = JSON.parse(JSON.stringify(original.stops));
            newNode.activeStopIndex = original.activeStopIndex;
          }

          this.nodes.push(newNode);
          this.renderNode(newNode);
          idMap.set(original.id, newNode.id);
          newSelectedIds.add(newNode.id);
        });

        this.connections.forEach(conn => {
          if (idMap.has(conn.fromNode) && idMap.has(conn.toNode)) {
            this.connections.push({
              id: `conn_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
              fromNode: idMap.get(conn.fromNode),
              fromSocket: conn.fromSocket,
              toNode: idMap.get(conn.toNode),
              toSocket: conn.toSocket
            });
          }
        });

        this.selectedNodeIds = newSelectedIds;
        this.updateNodeSelectionUI();
        this.updateGraph();
        showToast(`${idMap.size} 個のノードを複製しました`);
      }

      copySelectedNodes() {
        if (this.selectedNodeIds.size === 0) return;

        const nodesToCopy = [];
        this.selectedNodeIds.forEach(id => {
          const n = this.nodes.find(node => node.id === id);
          if (n && !NODE_DEFINITIONS[n.type].isOutputNode) {
            nodesToCopy.push(JSON.parse(JSON.stringify(n)));
          }
        });

        const connectionsToCopy = this.connections.filter(c =>
          this.selectedNodeIds.has(c.fromNode) && this.selectedNodeIds.has(c.toNode)
        );

        this.clipboard = {
          nodes: nodesToCopy,
          connections: connectionsToCopy
        };

        showToast(`${nodesToCopy.length} 個のノードをコピーしました`);
      }

      pasteNodes() {
        if (!this.clipboard || this.clipboard.nodes.length === 0) return;

        const newSelectedIds = new Set();
        const idMap = new Map();

        this.clipboard.nodes.forEach(orig => {
          const newNode = {
            id: `node_${this.nextId++}`,
            type: orig.type,
            title: orig.title,
            x: orig.x + 40,
            y: orig.y + 40,
            controlsVal: JSON.parse(JSON.stringify(orig.controlsVal)),
            inputsVal: JSON.parse(JSON.stringify(orig.inputsVal))
          };
          if (orig.stops) {
            newNode.stops = JSON.parse(JSON.stringify(orig.stops));
            newNode.activeStopIndex = orig.activeStopIndex;
          }

          this.nodes.push(newNode);
          this.renderNode(newNode);
          idMap.set(orig.id, newNode.id);
          newSelectedIds.add(newNode.id);
        });

        this.clipboard.connections.forEach(conn => {
          if (idMap.has(conn.fromNode) && idMap.has(conn.toNode)) {
            this.connections.push({
              id: `conn_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
              fromNode: idMap.get(conn.fromNode),
              fromSocket: conn.fromSocket,
              toNode: idMap.get(conn.toNode),
              toSocket: conn.toSocket
            });
          }
        });

        this.selectedNodeIds = newSelectedIds;
        this.updateNodeSelectionUI();
        this.updateGraph();
        showToast(`${idMap.size} 個のノードを貼り付けました`);
      }

      removeNode(nodeId) {
        const node = this.nodes.find(n => n.id === nodeId);
        if (node && NODE_DEFINITIONS[node.type].isOutputNode) {
          showToast('出力ノードは削除できません。');
          return;
        }

        // 削除されるノードに繋がっていた相手側は手動入力欄が復活するため再描画対象にする
        const survivorsToRefresh = new Set();
        this.connections.forEach(c => {
          if (c.fromNode === nodeId) survivorsToRefresh.add(c.toNode);
          if (c.toNode === nodeId) survivorsToRefresh.add(c.fromNode);
        });

        this.connections = this.connections.filter(
          c => !(c.fromNode === nodeId || c.toNode === nodeId)
        );

        this.nodes = this.nodes.filter(n => n.id !== nodeId);
        this.selectedNodeIds.delete(nodeId);
        const el = document.getElementById(nodeId);
        if (el) el.remove();
        compiler.removeViewerRenderer(nodeId);

        survivorsToRefresh.forEach(id => {
          const n = this.nodes.find(x => x.id === id);
          if (n) this.renderNode(n);
        });

        this.updateGraph();
      }

      renderNode(node) {
        // 重複レンダー防止：既存の同一IDノードエレメントを削除
        const existingEl = document.getElementById(node.id);
        if (existingEl) existingEl.remove();
        compiler.removeViewerRenderer(node.id);

        const def = NODE_DEFINITIONS[node.type];
        const nodeEl = document.createElement('div');
        nodeEl.className = 'node';
        if (this.selectedNodeIds.has(node.id)) nodeEl.classList.add('selected');
        nodeEl.id = node.id;
        nodeEl.style.transform = `translate(${node.x}px, ${node.y}px)`;

        const headerEl = document.createElement('div');
        headerEl.className = 'node-header';
        headerEl.style.backgroundColor = def.color;

        const titleSpan = document.createElement('span');
        titleSpan.className = 'node-title';
        titleSpan.textContent = node.title;
        titleSpan.title = 'ダブルクリックで名前を変更';
        headerEl.appendChild(titleSpan);

        // ノード名のリネーム（インスタンス単位。node.titleは各ノードが個別に持つ値なので、
        // 同じ種類の他のノードの表示名には影響しない）
        const beginTitleEdit = () => {
          const input = document.createElement('input');
          input.type = 'text';
          input.className = 'node-title-input';
          input.value = node.title;
          titleSpan.replaceWith(input);
          input.focus();
          input.select();

          const commit = () => {
            const newTitle = input.value.trim();
            node.title = newTitle || node.title;
            titleSpan.textContent = node.title;
            input.replaceWith(titleSpan);
          };
          const cancel = () => {
            input.replaceWith(titleSpan);
          };

          input.addEventListener('blur', commit);
          input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') { e.preventDefault(); input.blur(); }
            else if (e.key === 'Escape') { e.preventDefault(); input.removeEventListener('blur', commit); cancel(); }
          });
          input.addEventListener('mousedown', (e) => e.stopPropagation());
          input.addEventListener('touchstart', (e) => e.stopPropagation());
        };

        titleSpan.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          beginTitleEdit();
        });

        if (!def.isOutputNode) {
          const closeSpan = document.createElement('span');
          closeSpan.className = 'node-close';
          closeSpan.innerHTML = '&times;';
          closeSpan.addEventListener('click', (e) => {
            e.stopPropagation();
            this.removeNode(node.id);
          });
          headerEl.appendChild(closeSpan);
        }

        const handleHeaderDragStart = (e) => {
          if (!this.selectedNodeIds.has(node.id)) {
            if (e.shiftKey) {
              this.selectNode(node.id, true);
            } else {
              this.selectNode(node.id, false);
            }
          } else if (e.shiftKey) {
            this.selectNode(node.id, false, true);
            return;
          }

          const worldPos = this.screenToWorld(e.clientX, e.clientY);
          this.dragStartWorld = worldPos;
          this.draggingNodes = [];

          this.selectedNodeIds.forEach(id => {
            const n = this.nodes.find(item => item.id === id);
            if (n) {
              this.draggingNodes.push({
                node: n,
                startX: n.x,
                startY: n.y
              });
            }
          });

          e.stopPropagation();
        };

        headerEl.addEventListener('mousedown', (e) => {
          if (e.button !== 0) return;
          if (Date.now() - this.lastTouchTs < 600) return; // 合成mousedownを無視
          handleHeaderDragStart(e);
        });

        headerEl.addEventListener('touchstart', (e) => {
          if (e.touches.length !== 1) return;
          e.preventDefault();
          const t = e.touches[0];
          handleHeaderDragStart({
            clientX: t.clientX,
            clientY: t.clientY,
            shiftKey: false,
            stopPropagation: () => e.stopPropagation()
          });
        }, { passive: false });

        const bodyEl = document.createElement('div');
        bodyEl.className = 'node-body';

        if (def.isCustomUI && node.type === 'colorRamp') {
          const rampContainer = document.createElement('div');
          rampContainer.className = 'color-ramp-container';

          const interpCtrl = def.controls.find(c => c.id === 'interp');
          if (interpCtrl) {
            const select = document.createElement('select');
            select.className = 'node-select';
            interpCtrl.options.forEach(opt => {
              const option = document.createElement('option');
              option.value = opt.val;
              option.textContent = opt.label;
              if (opt.val === node.controlsVal.interp) option.selected = true;
              select.appendChild(option);
            });
            select.addEventListener('change', (e) => {
              node.controlsVal.interp = e.target.value;
              updateRampBarGradient();
              this.updateGraph();
            });
            rampContainer.appendChild(select);
          }

          const rampBar = document.createElement('div');
          rampBar.className = 'color-ramp-bar';

          // 補間方式（Linear/Ease/Constant）に応じて、GLSL側の見た目に近いプレビューを描画する
          const updateRampBarGradient = () => {
            const sortedStops = [...node.stops].sort((a, b) => a.pos - b.pos);
            const interp = node.controlsVal.interp || 'LINEAR';

            if (sortedStops.length === 0) {
              rampBar.style.background = '#000000';
              return;
            }
            if (sortedStops.length === 1) {
              rampBar.style.background = sortedStops[0].color;
              return;
            }

            let stopStrs;

            if (interp === 'CONSTANT') {
              // 各ストップの色を、次のストップの直前まで一定に保つ（階段状）
              stopStrs = [`${sortedStops[0].color} 0%`];
              sortedStops.forEach((s, i) => {
                const nextPos = i + 1 < sortedStops.length ? sortedStops[i + 1].pos : 1.0;
                stopStrs.push(`${s.color} ${(s.pos * 100).toFixed(2)}%`);
                stopStrs.push(`${s.color} ${(nextPos * 100).toFixed(2)}%`);
              });
            } else if (interp === 'EASE') {
              // GLSL側と同じsmoothstepカーブに沿って中間色を細かくサンプリングする
              stopStrs = [`${sortedStops[0].color} 0%`];
              for (let i = 0; i < sortedStops.length - 1; i++) {
                const a = sortedStops[i];
                const b = sortedStops[i + 1];
                const steps = 10;
                for (let s = 1; s <= steps; s++) {
                  const t = s / steps;
                  const eased = t * t * (3.0 - 2.0 * t);
                  const pos = a.pos + (b.pos - a.pos) * t;
                  stopStrs.push(`${mixHexColor(a.color, b.color, eased)} ${(pos * 100).toFixed(2)}%`);
                }
              }
            } else {
              // LINEAR
              stopStrs = sortedStops.map(s => `${s.color} ${(s.pos * 100).toFixed(2)}%`);
            }

            rampBar.style.background = `linear-gradient(to right, ${stopStrs.join(', ')})`;
          };
          updateRampBarGradient();

          const stopsContainer = document.createElement('div');
          stopsContainer.className = 'color-ramp-stops';

          const renderStops = () => {
            stopsContainer.innerHTML = '';
            node.stops.forEach((stop, idx) => {
              const stopEl = document.createElement('div');
              stopEl.className = `color-ramp-stop ${idx === node.activeStopIndex ? 'selected' : ''}`;
              stopEl.style.left = `${stop.pos * 100}%`;
              stopEl.style.backgroundColor = stop.color;

              const beginStopDrag = (clientX) => {
                node.activeStopIndex = idx;
                // renderStops()はDOMを作り直してドラッグ中のstopEl自体を破棄してしまうため、
                // 選択状態のクラス切り替えだけを行い、ドラッグ対象の要素は維持する
                stopsContainer.querySelectorAll('.color-ramp-stop').forEach((el, i) => {
                  el.classList.toggle('selected', i === idx);
                });
                updateColorInput();

                const applyMove = (moveClientX) => {
                  const barRect = rampBar.getBoundingClientRect();
                  let newPos = (moveClientX - barRect.left) / barRect.width;
                  stop.pos = Math.min(Math.max(newPos, 0.0), 1.0);
                  stopEl.style.left = `${stop.pos * 100}%`;
                  if (posInput) posInput.value = stop.pos.toFixed(2);
                  updateRampBarGradient();
                  this.updateGraph();
                };

                const onMove = (moveEvt) => {
                  // 何らかの理由でmouseupを取りこぼした場合（例:ドロップダウン操作でフォーカスが奪われた場合）、
                  // ボタンが実際には離されていることを検知してドラッグを強制終了する。
                  // これをしないと、ボタンを押していないのにつまみがカーソルに追従し続けてしまう。
                  if (moveEvt.buttons === 0) {
                    onUp();
                    return;
                  }
                  applyMove(moveEvt.clientX);
                };
                const onUp = () => {
                  window.removeEventListener('mousemove', onMove);
                  window.removeEventListener('mouseup', onUp);
                };
                window.addEventListener('mousemove', onMove);
                window.addEventListener('mouseup', onUp);

                const onTouchMove = (touchEvt) => {
                  if (touchEvt.touches.length !== 1) return;
                  touchEvt.preventDefault();
                  applyMove(touchEvt.touches[0].clientX);
                };
                const onTouchEnd = () => {
                  window.removeEventListener('touchmove', onTouchMove);
                  window.removeEventListener('touchend', onTouchEnd);
                  window.removeEventListener('touchcancel', onTouchEnd);
                };
                window.addEventListener('touchmove', onTouchMove, { passive: false });
                window.addEventListener('touchend', onTouchEnd);
                window.addEventListener('touchcancel', onTouchEnd);
              };

              stopEl.addEventListener('mousedown', (e) => {
                if (Date.now() - this.lastTouchTs < 600) return; // 合成mousedownを無視
                e.stopPropagation();
                beginStopDrag(e.clientX);
              });

              stopEl.addEventListener('touchstart', (e) => {
                if (e.touches.length !== 1) return;
                e.stopPropagation();
                e.preventDefault();
                beginStopDrag(e.touches[0].clientX);
              }, { passive: false });

              stopsContainer.appendChild(stopEl);
            });
          };

          const btnRow = document.createElement('div');
          btnRow.className = 'color-ramp-controls';

          const addBtn = document.createElement('button');
          addBtn.className = 'color-ramp-btn';
          addBtn.textContent = '+ Add';
          addBtn.addEventListener('click', () => {
            const current = node.stops[node.activeStopIndex] || { pos: 0.5, color: '#ffffff' };
            const newPos = Math.min(current.pos + 0.1, 1.0);
            node.stops.push({ pos: newPos, color: current.color });
            node.activeStopIndex = node.stops.length - 1;
            renderStops();
            updateRampBarGradient();
            updateColorInput();
            this.updateGraph();
          });

          const delBtn = document.createElement('button');
          delBtn.className = 'color-ramp-btn';
          delBtn.textContent = '- Remove';
          delBtn.addEventListener('click', () => {
            if (node.stops.length <= 2) {
              showToast('ストップは最低2個必要です');
              return;
            }
            node.stops.splice(node.activeStopIndex, 1);
            node.activeStopIndex = Math.max(0, node.activeStopIndex - 1);
            renderStops();
            updateRampBarGradient();
            updateColorInput();
            this.updateGraph();
          });

          const colorInput = document.createElement('input');
          colorInput.type = 'color';
          colorInput.className = 'node-input-color';

          const posInput = document.createElement('input');
          posInput.type = 'number';
          posInput.className = 'node-input-text';
          posInput.step = '0.01';
          posInput.style.width = '50px';

          const updateColorInput = () => {
            const activeStop = node.stops[node.activeStopIndex];
            if (activeStop) {
              colorInput.value = activeStop.color;
              posInput.value = activeStop.pos.toFixed(2);
            }
          };

          colorInput.addEventListener('input', (e) => {
            const activeStop = node.stops[node.activeStopIndex];
            if (activeStop) {
              activeStop.color = e.target.value;
              renderStops();
              updateRampBarGradient();
              this.updateGraph();
            }
          });

          posInput.addEventListener('input', (e) => {
            const activeStop = node.stops[node.activeStopIndex];
            if (activeStop) {
              const val = parseFloat(e.target.value);
              activeStop.pos = Math.min(Math.max(isNaN(val) ? 0 : val, 0.0), 1.0);
              renderStops();
              updateRampBarGradient();
              this.updateGraph();
            }
          });

          renderStops();
          updateColorInput();

          btnRow.appendChild(addBtn);
          btnRow.appendChild(delBtn);
          btnRow.appendChild(posInput);
          btnRow.appendChild(colorInput);

          rampContainer.appendChild(rampBar);
          rampContainer.appendChild(stopsContainer);
          rampContainer.appendChild(btnRow);
          bodyEl.appendChild(rampContainer);
        } else if (def.controls) {
          def.controls.forEach(ctrl => {
            const ctrlContainer = document.createElement('div');
            ctrlContainer.className = 'node-control';

            const label = document.createElement('label');
            label.textContent = ctrl.label;
            ctrlContainer.appendChild(label);

            if (ctrl.type === 'select') {
              const select = document.createElement('select');
              select.className = 'node-select';
              ctrl.options.forEach(opt => {
                const option = document.createElement('option');
                option.value = opt.val;
                option.textContent = opt.label;
                if (opt.val === node.controlsVal[ctrl.id]) option.selected = true;
                select.appendChild(option);
              });
              select.addEventListener('change', (e) => {
                node.controlsVal[ctrl.id] = e.target.value;
                if (node.type === 'math' || node.type === 'vectorMath') {
                  // 演算子によって入出力ソケットの数・型が変わるため再構築する
                  this.pruneInvalidConnections(node);
                  this.renderNode(node);
                }
                this.updateGraph();
              });
              ctrlContainer.appendChild(select);
            } else if (ctrl.type === 'number') {
              const field = this.createDragNumberField({
                value: node.controlsVal[ctrl.id],
                step: ctrl.step || 0.1,
                onChange: (v) => {
                  node.controlsVal[ctrl.id] = v;
                  this.updateGraph();
                }
              });
              ctrlContainer.appendChild(field.el);
            } else if (ctrl.type === 'color') {
              const input = document.createElement('input');
              input.type = 'color';
              input.className = 'node-input-color';
              input.value = node.controlsVal[ctrl.id];
              input.addEventListener('input', (e) => {
                node.controlsVal[ctrl.id] = e.target.value;
                this.updateGraph();
              });
              ctrlContainer.appendChild(input);
            }

            bodyEl.appendChild(ctrlContainer);
          });
        }

        if (node.type === 'viewer') {
          // ノード自身に入力値のプレビューを描画する小さなキャンバス
          const viewerCanvas = document.createElement('canvas');
          viewerCanvas.className = 'node-viewer-canvas';
          viewerCanvas.width = 160;
          viewerCanvas.height = 160;
          bodyEl.appendChild(viewerCanvas);

          // DOM挿入後（末尾のwrapperEl.appendChild後）に初回コンパイルできるよう次のマイクロタスクで実行
          Promise.resolve().then(() => {
            compiler.compileViewerNode(this, node);
            compiler.renderViewerNode(node.id);
          });
        }

        const socketsEl = document.createElement('div');
        socketsEl.className = 'sockets-container';

        const effInputs = getEffectiveInputs(node);
        const effOutputs = getEffectiveOutputs(node);

        const bindSocketEvents = (pin, socketId, isOutput, type) => {
          pin.addEventListener('mousedown', (e) => {
            if (Date.now() - this.lastTouchTs < 600) return; // 合成mousedownを無視
            this.onSocketMouseDown(e, node.id, socketId, isOutput, type);
          });
          pin.addEventListener('touchstart', (e) => {
            if (e.touches.length !== 1) return;
            e.preventDefault();
            const t = e.touches[0];
            this.onSocketMouseDown({
              clientX: t.clientX,
              clientY: t.clientY,
              button: 0,
              stopPropagation: () => e.stopPropagation()
            }, node.id, socketId, isOutput, type);
          }, { passive: false });
        };

        const inputsCol = document.createElement('div');
        inputsCol.className = 'sockets-column inputs';
        effInputs.forEach(inp => {
          const row = document.createElement('div');
          row.className = 'socket-row';

          const pin = document.createElement('div');
          pin.className = 'socket-pin';
          pin.dataset.nodeId = node.id;
          pin.dataset.socketId = inp.id;
          pin.dataset.isOutput = 'false';
          pin.dataset.type = inp.type;

          pin.style.borderColor = this.getSocketColor(inp.type);
          bindSocketEvents(pin, inp.id, false, inp.type);

          const isConnected = this.connections.some(c => c.toNode === node.id && c.toSocket === inp.id);

          // 未接続の数値/ベクトル入力は、Blenderのようにソケット上で直接値を編集できるようにする
          if (!isConnected && inp.type === 'float' && typeof inp.default === 'number') {
            row.classList.add('socket-row-editable');
            const label = document.createElement('span');
            label.className = 'socket-label socket-label-editable';
            label.textContent = inp.label;

            const topRow = document.createElement('div');
            topRow.className = 'socket-row-top';
            topRow.appendChild(pin);
            topRow.appendChild(label);

            const field = this.createDragNumberField({
              value: (node.inputsVal[inp.id] !== undefined) ? node.inputsVal[inp.id] : inp.default,
              step: 0.1,
              onChange: (v) => {
                node.inputsVal[inp.id] = v;
                this.updateGraph();
              }
            });
            field.el.classList.add('socket-input-field');

            row.appendChild(topRow);
            row.appendChild(field.el);
          } else if (!isConnected && inp.type === 'vec3') {
            row.classList.add('socket-row-editable');
            const label = document.createElement('span');
            label.className = 'socket-label socket-label-editable';
            label.textContent = inp.label;

            const topRow = document.createElement('div');
            topRow.className = 'socket-row-top';
            topRow.appendChild(pin);
            topRow.appendChild(label);

            const colorInput = document.createElement('input');
            colorInput.type = 'color';
            colorInput.className = 'node-input-color socket-input-field';
            colorInput.value = node.inputsVal[inp.id] || glslVec3ToHex(inp.default || 'vec3(0.0)');
            colorInput.addEventListener('input', (e) => {
              node.inputsVal[inp.id] = e.target.value;
              this.updateGraph();
            });
            colorInput.addEventListener('mousedown', (e) => e.stopPropagation());
            colorInput.addEventListener('touchstart', (e) => e.stopPropagation());

            row.appendChild(topRow);
            row.appendChild(colorInput);
          } else {
            const label = document.createElement('span');
            label.className = 'socket-label';
            label.textContent = inp.label;

            row.appendChild(pin);
            row.appendChild(label);
          }

          inputsCol.appendChild(row);
        });

        const outputsCol = document.createElement('div');
        outputsCol.className = 'sockets-column outputs';
        effOutputs.forEach(out => {
          const row = document.createElement('div');
          row.className = 'socket-row';

          const label = document.createElement('span');
          label.className = 'socket-label';
          label.textContent = out.label;

          const pin = document.createElement('div');
          pin.className = 'socket-pin';
          pin.dataset.nodeId = node.id;
          pin.dataset.socketId = out.id;
          pin.dataset.isOutput = 'true';
          pin.dataset.type = out.type;

          pin.style.borderColor = this.getSocketColor(out.type);
          bindSocketEvents(pin, out.id, true, out.type);

          row.appendChild(label);
          row.appendChild(pin);
          outputsCol.appendChild(row);
        });

        socketsEl.appendChild(inputsCol);
        socketsEl.appendChild(outputsCol);
        bodyEl.appendChild(socketsEl);

        nodeEl.appendChild(headerEl);
        nodeEl.appendChild(bodyEl);
        this.wrapperEl.appendChild(nodeEl);
      }

      getSocketColor(type) {
        switch (type) {
          case 'float': return 'var(--socket-gray)';
          case 'vec2': return 'var(--socket-yellow)';
          case 'vec3': return 'var(--socket-purple)';
          default: return 'var(--socket-blue)';
        }
      }

      onSocketMouseDown(e, nodeId, socketId, isOutput, type) {
        if (e.button !== 0) return;
        e.stopPropagation();

        if (!isOutput) {
          this.connections = this.connections.filter(c => !(c.toNode === nodeId && c.toSocket === socketId));
        }

        const pos = this.getSocketPos(nodeId, socketId, isOutput);

        this.connectingSocket = {
          nodeId,
          socketId,
          isOutput,
          type,
          x: pos.x,
          y: pos.y
        };

        this.tempWirePos = { x: pos.x, y: pos.y };
        this.updateWires();
      }

      onMouseMove(e) {
        // 実マウスイベントでボタンが離されているのにドラッグ系の状態が残っている場合
        // （ネイティブのselectドロップダウン操作などでmouseupを取りこぼした場合）は強制終了する。
        // タッチ由来の合成イベントには buttons が無いため、この判定はマウス操作時のみ働く。
        if (e.buttons === 0 && (this.isPanning || this.isBoxSelecting || this.draggingNodes.length > 0 || this.connectingSocket)) {
          this.onMouseUp(e);
          return;
        }

        if (this.isPanning) {
          this.panX = e.clientX - this.panStart.x;
          this.panY = e.clientY - this.panStart.y;
          this.updateTransform();
          this.updateWires();
          return;
        }

        if (this.isBoxSelecting) {
          this.updateBoxSelection(e);
          return;
        }

        const worldPos = this.screenToWorld(e.clientX, e.clientY);

        if (this.draggingNodes.length > 0) {
          const dx = worldPos.x - this.dragStartWorld.x;
          const dy = worldPos.y - this.dragStartWorld.y;

          this.draggingNodes.forEach(item => {
            item.node.x = item.startX + dx;
            item.node.y = item.startY + dy;

            const el = document.getElementById(item.node.id);
            if (el) {
              el.style.transform = `translate(${item.node.x}px, ${item.node.y}px)`;
            }
          });

          this.updateWires();
        }

        if (this.connectingSocket) {
          this.tempWirePos = worldPos;
          this.updateWires();
        }
      }

      onMouseUp(e) {
        if (this.isPanning) {
          this.isPanning = false;
          this.containerEl.style.cursor = 'crosshair';
        }

        if (this.isBoxSelecting) {
          this.endBoxSelection();
        }

        if (this.draggingNodes.length > 0) {
          this.draggingNodes = [];
        }

        if (this.connectingSocket) {
          // 接続の有無でソケットの手動入力欄の表示が変わるため、関わったノードは再描画する
          const affectedNodeIds = new Set([this.connectingSocket.nodeId]);

          const target = document.elementFromPoint(e.clientX, e.clientY);
          if (target && target.classList.contains('socket-pin')) {
            const targetNodeId = target.dataset.nodeId;
            const targetSocketId = target.dataset.socketId;
            const targetIsOutput = target.dataset.isOutput === 'true';

            if (
              targetNodeId !== this.connectingSocket.nodeId &&
              targetIsOutput !== this.connectingSocket.isOutput
            ) {
              const from = this.connectingSocket.isOutput ? this.connectingSocket : { nodeId: targetNodeId, socketId: targetSocketId };
              const to = this.connectingSocket.isOutput ? { nodeId: targetNodeId, socketId: targetSocketId } : this.connectingSocket;

              this.connections = this.connections.filter(
                c => !(c.toNode === to.nodeId && c.toSocket === to.socketId)
              );

              this.connections.push({
                id: `conn_${Date.now()}`,
                fromNode: from.nodeId,
                fromSocket: from.socketId,
                toNode: to.nodeId,
                toSocket: to.socketId
              });

              affectedNodeIds.add(to.nodeId);
              this.updateGraph();
            }
          }

          affectedNodeIds.forEach(id => {
            const n = this.nodes.find(x => x.id === id);
            if (n) this.renderNode(n);
          });
          this.updateWires();

          this.connectingSocket = null;
          this.updateWires();
        }
      }

      getSocketPos(nodeId, socketId, isOutput) {
        const el = document.querySelector(`.socket-pin[data-node-id="${nodeId}"][data-socket-id="${socketId}"][data-is-output="${isOutput}"]`);
        if (!el) return { x: 0, y: 0 };
        const rect = el.getBoundingClientRect();
        const containerRect = this.containerEl.getBoundingClientRect();
        return {
          x: (rect.left + rect.width / 2 - containerRect.left - this.panX) / this.zoom,
          y: (rect.top + rect.height / 2 - containerRect.top - this.panY) / this.zoom
        };
      }

      updateWires() {
        let svgHtml = '';

        document.querySelectorAll('.socket-pin').forEach(pin => pin.classList.remove('connected'));

        this.connections.forEach(conn => {
          const p1 = this.getSocketPos(conn.fromNode, conn.fromSocket, true);
          const p2 = this.getSocketPos(conn.toNode, conn.toSocket, false);

          if (p1 && p2) {
            const pin1 = document.querySelector(`.socket-pin[data-node-id="${conn.fromNode}"][data-socket-id="${conn.fromSocket}"][data-is-output="true"]`);
            const pin2 = document.querySelector(`.socket-pin[data-node-id="${conn.toNode}"][data-socket-id="${conn.toSocket}"][data-is-output="false"]`);
            if (pin1) pin1.classList.add('connected');
            if (pin2) pin2.classList.add('connected');

            const pathStr = this.createBezierPath(p1.x, p1.y, p2.x, p2.y);
            svgHtml += `<path d="${pathStr}" class="wire" data-conn-id="${conn.id}" onclick="graph.removeConnection('${conn.id}')"></path>`;
          }
        });

        if (this.connectingSocket) {
          const p1 = { x: this.connectingSocket.x, y: this.connectingSocket.y };
          const p2 = this.tempWirePos;
          const pathStr = this.connectingSocket.isOutput
            ? this.createBezierPath(p1.x, p1.y, p2.x, p2.y)
            : this.createBezierPath(p2.x, p2.y, p1.x, p1.y);
          svgHtml += `<path d="${pathStr}" class="wire wire-active" style="stroke-dasharray: 6; animation: dash 1s linear infinite;"></path>`;
        }

        this.svgEl.innerHTML = svgHtml;
      }

      removeConnection(connId) {
        const conn = this.connections.find(c => c.id === connId);
        this.connections = this.connections.filter(c => c.id !== connId);

        // 切断された入力側ノードは手動入力欄が復活するため再描画する
        if (conn) {
          const toNode = this.nodes.find(n => n.id === conn.toNode);
          if (toNode) this.renderNode(toNode);
        }

        this.updateGraph();
      }

      // Math/Vector Mathの演算子変更などでソケット構成が変わった際、
      // 存在しなくなったソケットに繋がっていた接続を取り除く
      pruneInvalidConnections(node) {
        const validInputIds = new Set(getEffectiveInputs(node).map(i => i.id));
        const validOutputIds = new Set(getEffectiveOutputs(node).map(o => o.id));

        // このノードの出力側の接続が失われる場合、相手（入力側）は手動入力欄が復活するため再描画する
        const survivorsToRefresh = new Set();
        this.connections.forEach(c => {
          if (c.fromNode === node.id && !validOutputIds.has(c.fromSocket)) {
            survivorsToRefresh.add(c.toNode);
          }
        });

        this.connections = this.connections.filter(c => {
          if (c.toNode === node.id && !validInputIds.has(c.toSocket)) return false;
          if (c.fromNode === node.id && !validOutputIds.has(c.fromSocket)) return false;
          return true;
        });

        survivorsToRefresh.forEach(id => {
          if (id === node.id) return; // 自分自身はこの後の呼び出し元で再描画される
          const n = this.nodes.find(x => x.id === id);
          if (n) this.renderNode(n);
        });
      }

      // Blender風の数値入力ウィジェット: クリック(ドラッグなし)でテキスト入力、
      // 左右にドラッグ/スワイプすると数値を増減できる。ネイティブのスピンボタンより操作しやすい。
      createDragNumberField({ value, step = 0.1, precision = 2, min = null, max = null, onChange }) {
        let currentValue = value;

        const el = document.createElement('div');
        el.className = 'drag-number';

        const valueSpan = document.createElement('span');
        valueSpan.className = 'drag-number-value';
        el.appendChild(valueSpan);

        const clamp = (v) => {
          if (min !== null) v = Math.max(min, v);
          if (max !== null) v = Math.min(max, v);
          return v;
        };

        const setDisplay = (v) => {
          valueSpan.textContent = Number(v).toFixed(precision);
        };
        setDisplay(currentValue);

        const enterEditMode = () => {
          const input = document.createElement('input');
          input.type = 'text';
          input.inputMode = 'decimal';
          input.className = 'drag-number-input';
          input.value = currentValue;

          el.replaceChild(input, valueSpan);
          input.focus();
          input.select();

          const commit = () => {
            const parsed = parseFloat(input.value);
            if (!isNaN(parsed)) {
              currentValue = clamp(parsed);
              onChange(currentValue);
            }
            setDisplay(currentValue);
            el.replaceChild(valueSpan, input);
          };
          const cancel = () => {
            el.replaceChild(valueSpan, input);
          };

          input.addEventListener('blur', commit);
          input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') { e.preventDefault(); input.blur(); }
            else if (e.key === 'Escape') { e.preventDefault(); input.removeEventListener('blur', commit); cancel(); }
          });
          input.addEventListener('pointerdown', (e) => e.stopPropagation());
        };

        // Pointer Events（マウス／タッチ／ペンを単一APIで扱える）＋ポインタキャプチャを使う。
        // 個別にmouse/touchイベントを組み合わせるより、実機Safari含め挙動が安定する。
        let dragState = null;

        el.addEventListener('pointerdown', (e) => {
          if (e.button !== undefined && e.button > 0) return; // 右クリック等は無視（touchはbutton=0で報告される）
          e.preventDefault();
          e.stopPropagation();
          if (el.setPointerCapture) {
            try { el.setPointerCapture(e.pointerId); } catch (err) { /* noop */ }
          }
          dragState = { pointerId: e.pointerId, startX: e.clientX, startValue: currentValue, hasDragged: false };
        });

        el.addEventListener('pointermove', (e) => {
          if (!dragState || e.pointerId !== dragState.pointerId) return;
          const dx = e.clientX - dragState.startX;
          if (Math.abs(dx) > 3) dragState.hasDragged = true;
          currentValue = clamp(dragState.startValue + dx * step * 0.1);
          setDisplay(currentValue);
          onChange(currentValue);
        });

        const endDrag = (e) => {
          if (!dragState || (e.pointerId !== undefined && e.pointerId !== dragState.pointerId)) return;
          const hadDragged = dragState.hasDragged;
          if (el.releasePointerCapture) {
            try { el.releasePointerCapture(dragState.pointerId); } catch (err) { /* noop */ }
          }
          dragState = null;
          if (!hadDragged) enterEditMode();
        };
        el.addEventListener('pointerup', endDrag);
        el.addEventListener('pointercancel', endDrag);

        return {
          el,
          setValue: (v) => { currentValue = v; setDisplay(v); }
        };
      }

      createBezierPath(x1, y1, x2, y2) {
        const dx = Math.abs(x2 - x1) * 0.5;
        const curveOffset = Math.max(dx, 50);
        const cx1 = x1 + curveOffset;
        const cx2 = x2 - curveOffset;
        return `M ${x1} ${y1} C ${cx1} ${y1}, ${cx2} ${y2}, ${x2} ${y2}`;
      }

      updateGraph() {
        this.updateWires();
        compiler.compileAndRender(this);

        // Viewerノードは自身のミニキャンバスを持つため、ノードDOMは作り直さずに
        // ソケットの型表示とプレビュー用シェーダーだけを更新する
        this.nodes.filter(n => n.type === 'viewer').forEach(n => {
          this.refreshViewerSocketColors(n);
          compiler.compileViewerNode(this, n);
        });
      }

      // Viewerノードの入出力の型は接続先によって変わるため、
      // ノードDOMを作り直さずにソケットピンの色・データ属性だけを更新する
      refreshViewerSocketColors(node) {
        const type = resolveViewerType(node);
        document.querySelectorAll(`#${node.id} .socket-pin`).forEach(pin => {
          pin.dataset.type = type;
          pin.style.borderColor = this.getSocketColor(type);
        });
      }

      clear() {
        this.nodes = [];
        this.connections = [];
        this.wrapperEl.innerHTML = '';
        this.updateGraph();
      }
    }

    // 全てのWebGL描画（メインプレビュー・Viewerノードのミニプレビュー共通）で使う頂点シェーダー
    const VERTEX_SHADER_SOURCE = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // ── GLSLコードジェネレータ＆コンパイラ ──
    class ShaderCompiler {
      constructor() {
        this.canvas = document.getElementById('shaderCanvas');
        this.gl = this.canvas.getContext('webgl');
        this.program = null;
        this.startTime = Date.now();

        // Viewerノードのノード上プレビュー用（1ノードにつき1つの小さなWebGLレンダラー）
        // key: nodeId, value: { canvas, gl, program, positionBuffer }
        this.viewerRenderers = new Map();

        if (!this.gl) {
          showError('お使いのブラウザはWebGLに対応していません。');
          return;
        }

        this.positionBuffer = this.createQuadBuffer(this.gl);
      }

      createQuadBuffer(gl) {
        const positions = new Float32Array([
          -1, -1,
           1, -1,
          -1,  1,
          -1,  1,
           1, -1,
           1,  1,
        ]);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
        return positionBuffer;
      }

      // ノード評価に必要な共通の仕組み（ヘルパー関数群・ノード評価器・出力文リスト）を構築する。
      // generateGLSL（本来の出力ノード起点）と generateGLSLFromNode（Viewerノードのプレビュー起点）で共用する。
      buildEvaluationContext(graph) {
        // 基本ヘッダー
        let headerCode = `precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;

// --- Helper Utilities ---
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float voronoi(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float minDist = 1.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 neighbor = vec2(float(x), float(y));
      vec2 point = vec2(random(i + neighbor), random(i + neighbor + 57.0));
      vec2 diff = neighbor + point - f;
      float dist = length(diff);
      minDist = min(minDist, dist);
    }
  }
  return minDist;
}
`;

        let customFunctions = '';
        const evaluatedNodes = new Set();
        const evalStack = new Set();
        const nodeStatements = [];

        const evaluateNode = (nodeId) => {
          if (evaluatedNodes.has(nodeId)) return;
          if (evalStack.has(nodeId)) return;

          evalStack.add(nodeId);
          const node = graph.nodes.find(n => n.id === nodeId);
          if (!node) {
            evalStack.delete(nodeId);
            return;
          }

          const def = NODE_DEFINITIONS[node.type];

          const getInputValue = (inputId, defaultVal, targetType) => {
            const conn = graph.connections.find(c => c.toNode === nodeId && c.toSocket === inputId);
            if (conn) {
              evaluateNode(conn.fromNode);
              const fromNodeObj = graph.nodes.find(n => n.id === conn.fromNode);
              if (!fromNodeObj) return defaultVal;

              const fromOutputs = getEffectiveOutputs(fromNodeObj);
              const outSocket = fromOutputs.find(o => o.id === conn.fromSocket);
              const fromType = outSocket ? outSocket.type : 'float';
              const varName = `${conn.fromNode}_${conn.fromSocket}`;

              if (targetType && fromType !== targetType) {
                if (targetType === 'float') {
                  if (fromType === 'vec2') return `${varName}.x`;
                  if (fromType === 'vec3') return `${varName}.r`;
                } else if (targetType === 'vec2') {
                  if (fromType === 'float') return `vec2(${varName})`;
                  if (fromType === 'vec3') return `${varName}.xy`;
                } else if (targetType === 'vec3') {
                  if (fromType === 'float') return `vec3(${varName})`;
                  if (fromType === 'vec2') return `vec3(${varName}, 0.0)`;
                }
              }
              return varName;
            }

            // 未接続の場合、ノード上で手動入力された値があればそれを優先する
            const manualVal = node.inputsVal ? node.inputsVal[inputId] : undefined;
            if (manualVal !== undefined) {
              if (targetType === 'vec3' && typeof manualVal === 'string') return hexToGlslVec3(manualVal);
              if (targetType === 'float' && typeof manualVal === 'number') return manualVal.toFixed(4);
            }
            return defaultVal;
          };

          const varPrefix = `${node.id}`;

          switch (node.type) {
            case 'uv':
              nodeStatements.push(`vec2 ${varPrefix}_uv = gl_FragCoord.xy / u_resolution.xy;`);
              break;

            case 'time':
              nodeStatements.push(`float ${varPrefix}_time = u_time;`);
              break;

            case 'colorConst': {
              const hex = node.controlsVal.color || '#3498db';
              const r = (parseInt(hex.slice(1, 3), 16) / 255).toFixed(3);
              const g = (parseInt(hex.slice(3, 5), 16) / 255).toFixed(3);
              const b = (parseInt(hex.slice(5, 7), 16) / 255).toFixed(3);
              nodeStatements.push(`vec3 ${varPrefix}_color = vec3(${r}, ${g}, ${b});`);
              break;
            }

            case 'valueConst': {
              const val = (node.controlsVal.value || 0).toFixed(3);
              nodeStatements.push(`float ${varPrefix}_val = ${val};`);
              break;
            }

            case 'perlin': {
              const uv = getInputValue('uv', 'gl_FragCoord.xy / u_resolution.xy', 'vec2');
              const scale = getInputValue('scale', '5.0', 'float');
              nodeStatements.push(`float ${varPrefix}_fac = noise(${uv} * ${scale});`);
              break;
            }

            case 'voronoi': {
              const uv = getInputValue('uv', 'gl_FragCoord.xy / u_resolution.xy', 'vec2');
              const scale = getInputValue('scale', '8.0', 'float');
              nodeStatements.push(`float ${varPrefix}_fac = voronoi(${uv} * ${scale});`);
              break;
            }

            case 'checker': {
              const uv = getInputValue('uv', 'gl_FragCoord.xy / u_resolution.xy', 'vec2');
              const scale = getInputValue('scale', '10.0', 'float');
              nodeStatements.push(`vec2 ${varPrefix}_p = floor(${uv} * ${scale});`);
              nodeStatements.push(`float ${varPrefix}_fac = mod(${varPrefix}_p.x + ${varPrefix}_p.y, 2.0);`);
              break;
            }

            case 'math': {
              const a = getInputValue('a', '0.0', 'float');
              const b = getInputValue('b', '0.0', 'float');
              const c = getInputValue('c', '0.0', 'float');
              const op = node.controlsVal.op || 'ADD';
              let expr = '0.0';

              switch (op) {
                case 'ADD': expr = `${a} + ${b}`; break;
                case 'SUB': expr = `${a} - ${b}`; break;
                case 'MUL': expr = `${a} * ${b}`; break;
                case 'DIV': expr = `${a} / (${b} == 0.0 ? 0.00001 : ${b})`; break;
                case 'MAD': expr = `${a} * ${b} + ${c}`; break;
                case 'POWER': expr = `pow(max(${a}, 0.0), ${b})`; break;
                case 'LOG': expr = `log(max(${a}, 0.00001))`; break;
                case 'SQRT': expr = `sqrt(max(${a}, 0.0))`; break;
                case 'INVSQRT': expr = `inversesqrt(max(${a}, 0.00001))`; break;
                case 'ABS': expr = `abs(${a})`; break;
                case 'EXP': expr = `exp(${a})`; break;
                case 'MIN': expr = `min(${a}, ${b})`; break;
                case 'MAX': expr = `max(${a}, ${b})`; break;
                case 'LESS': expr = `${a} < ${b} ? 1.0 : 0.0`; break;
                case 'GREATER': expr = `${a} > ${b} ? 1.0 : 0.0`; break;
                case 'SIGN': expr = `sign(${a})`; break;
                case 'COMPARE': expr = `abs(${a} - ${b}) <= max(${c}, 0.00001) ? 1.0 : 0.0`; break;
                case 'SMOOTH_MIN': expr = `mix(${b}, ${a}, clamp(0.5 + 0.5 * (${b} - ${a}) / max(${c}, 0.0001), 0.0, 1.0))`; break;
                case 'SMOOTH_MAX': expr = `mix(${a}, ${b}, clamp(0.5 + 0.5 * (${b} - ${a}) / max(${c}, 0.0001), 0.0, 1.0))`; break;
                case 'ROUND': expr = `floor(${a} + 0.5)`; break;
                case 'FLOOR': expr = `floor(${a})`; break;
                case 'CEIL': expr = `ceil(${a})`; break;
                case 'TRUNC': expr = `sign(${a}) * floor(abs(${a}))`; break;
                case 'FRACT': expr = `fract(${a})`; break;
                case 'MOD': expr = `mod(${a}, ${b} == 0.0 ? 1.0 : ${b})`; break;
                case 'WRAP': expr = `mod(${a} - ${b}, ${c} - ${b}) + ${b}`; break;
                case 'SNAP': expr = `floor(${a} / max(${b}, 0.00001)) * ${b}`; break;
                case 'PINGPONG': expr = `abs(mod(${a}, max(${b} * 2.0, 0.00001)) - ${b})`; break;
                case 'SIN': expr = `sin(${a})`; break;
                case 'COS': expr = `cos(${a})`; break;
                case 'TAN': expr = `tan(${a})`; break;
                case 'ASIN': expr = `asin(clamp(${a}, -1.0, 1.0))`; break;
                case 'ACOS': expr = `acos(clamp(${a}, -1.0, 1.0))`; break;
                case 'ATAN': expr = `atan(${a})`; break;
                case 'ATAN2': expr = `atan(${a}, ${b})`; break;
                case 'RADIANS': expr = `${a} * 0.01745329251`; break;
                case 'DEGREES': expr = `${a} * 57.295779513`; break;
              }

              nodeStatements.push(`float ${varPrefix}_val = ${expr};`);
              break;
            }

            case 'vectorMath': {
              const va = getInputValue('a', 'vec3(0.0)', 'vec3');
              const vb = getInputValue('b', 'vec3(0.0)', 'vec3');
              const scale = getInputValue('scale', '1.0', 'float');
              const op = node.controlsVal.op || 'ADD';

              let vecExpr = 'vec3(0.0)';
              let valExpr = '0.0';

              switch (op) {
                case 'ADD': vecExpr = `${va} + ${vb}`; break;
                case 'SUB': vecExpr = `${va} - ${vb}`; break;
                case 'MUL': vecExpr = `${va} * ${vb}`; break;
                case 'DIV': vecExpr = `${va} / max(${vb}, vec3(0.00001))`; break;
                case 'CROSS': vecExpr = `cross(${va}, ${vb})`; break;
                case 'DOT': valExpr = `dot(${va}, ${vb})`; break;
                case 'DISTANCE': valExpr = `distance(${va}, ${vb})`; break;
                case 'LENGTH': valExpr = `length(${va})`; break;
                case 'SCALE': vecExpr = `${va} * ${scale}`; break;
                case 'NORMALIZE': vecExpr = `normalize(${va})`; break;
                case 'ABS': vecExpr = `abs(${va})`; break;
                case 'MIN': vecExpr = `min(${va}, ${vb})`; break;
                case 'MAX': vecExpr = `max(${va}, ${vb})`; break;
                case 'FLOOR': vecExpr = `floor(${va})`; break;
                case 'CEIL': vecExpr = `ceil(${va})`; break;
                case 'FRACT': vecExpr = `fract(${va})`; break;
                case 'MOD': vecExpr = `mod(${va}, ${vb})`; break;
                case 'SIN': vecExpr = `sin(${va})`; break;
                case 'COS': vecExpr = `cos(${va})`; break;
                case 'TAN': vecExpr = `tan(${va})`; break;
                case 'REFLECT': vecExpr = `reflect(${va}, normalize(${vb}))`; break;
              }

              nodeStatements.push(`vec3 ${varPrefix}_vec = ${vecExpr};`);
              nodeStatements.push(`float ${varPrefix}_val = ${valExpr};`);
              break;
            }

            case 'mix': {
              const fac = getInputValue('fac', '0.5', 'float');
              const a = getInputValue('a', 'vec3(0.0)', 'vec3');
              const b = getInputValue('b', 'vec3(1.0)', 'vec3');
              nodeStatements.push(`vec3 ${varPrefix}_out = mix(${a}, ${b}, clamp(${fac}, 0.0, 1.0));`);
              break;
            }

            case 'colorRamp': {
              const fac = getInputValue('fac', '0.5', 'float');
              const interp = node.controlsVal.interp || 'LINEAR';
              const sortedStops = [...(node.stops || [])].sort((x, y) => x.pos - y.pos);

              if (sortedStops.length === 0) {
                nodeStatements.push(`vec3 ${varPrefix}_color = vec3(0.0); float ${varPrefix}_alpha = 1.0;`);
                break;
              }

              // ColorRamp評価用関数の構築
              let glslFunc = `vec3 getRamp_${varPrefix}(float f) {\n`;
              glslFunc += `    float t = clamp(f, 0.0, 1.0);\n`;

              for (let i = 0; i < sortedStops.length; i++) {
                const s = sortedStops[i];
                const hex = s.color;
                const r = (parseInt(hex.slice(1, 3), 16) / 255).toFixed(3);
                const g = (parseInt(hex.slice(3, 5), 16) / 255).toFixed(3);
                const b = (parseInt(hex.slice(5, 7), 16) / 255).toFixed(3);
                const cStr = `vec3(${r}, ${g}, ${b})`;

                if (i === 0) {
                  glslFunc += `    if (t <= ${s.pos.toFixed(4)}) return ${cStr};\n`;
                } else {
                  const prev = sortedStops[i - 1];
                  const pr = (parseInt(prev.color.slice(1, 3), 16) / 255).toFixed(3);
                  const pg = (parseInt(prev.color.slice(3, 5), 16) / 255).toFixed(3);
                  const pb = (parseInt(prev.color.slice(5, 7), 16) / 255).toFixed(3);
                  const prevCStr = `vec3(${pr}, ${pg}, ${pb})`;

                  const posDelta = Math.max(s.pos - prev.pos, 0.0001).toFixed(4);

                  glslFunc += `    if (t < ${s.pos.toFixed(4)}) {\n`;
                  glslFunc += `        float factor = (t - ${prev.pos.toFixed(4)}) / ${posDelta};\n`;

                  if (interp === 'CONSTANT') {
                    glslFunc += `        return ${prevCStr};\n`;
                  } else if (interp === 'EASE') {
                    glslFunc += `        factor = factor * factor * (3.0 - 2.0 * factor);\n`;
                    glslFunc += `        return mix(${prevCStr}, ${cStr}, factor);\n`;
                  } else { // LINEAR
                    glslFunc += `        return mix(${prevCStr}, ${cStr}, factor);\n`;
                  }
                  glslFunc += `    }\n`;
                }
              }

              const lastHex = sortedStops[sortedStops.length - 1].color;
              const lr = (parseInt(lastHex.slice(1, 3), 16) / 255).toFixed(3);
              const lg = (parseInt(lastHex.slice(3, 5), 16) / 255).toFixed(3);
              const lb = (parseInt(lastHex.slice(5, 7), 16) / 255).toFixed(3);
              glslFunc += `    return vec3(${lr}, ${lg}, ${lb});\n}\n\n`;

              // トップレベル関数宣言に追加（headerCodeより後、mainより前）
              customFunctions += glslFunc;

              nodeStatements.push(`vec3 ${varPrefix}_color = getRamp_${varPrefix}(${fac});`);
              nodeStatements.push(`float ${varPrefix}_alpha = 1.0;`);
              break;
            }

            case 'combineRgb': {
              const r = getInputValue('r', '0.0', 'float');
              const g = getInputValue('g', '0.0', 'float');
              const b = getInputValue('b', '0.0', 'float');
              nodeStatements.push(`vec3 ${varPrefix}_color = vec3(${r}, ${g}, ${b});`);
              break;
            }

            case 'separateRgb': {
              const col = getInputValue('color', 'vec3(1.0)', 'vec3');
              nodeStatements.push(`
                float ${varPrefix}_r = ${col}.r;
                float ${varPrefix}_g = ${col}.g;
                float ${varPrefix}_b = ${col}.b;
              `);
              break;
            }

            case 'output': {
              const finalColor = getInputValue('color', 'vec3(0.1)', 'vec3');
              nodeStatements.push(`gl_FragColor = vec4(${finalColor}, 1.0);`);
              break;
            }

            case 'viewer': {
              // Viewerノードの出力は入力と同じ値をそのまま通す（パススルー）
              const conn = graph.connections.find(c => c.toNode === nodeId && c.toSocket === 'in');
              let inType = 'vec3';
              let inExpr = 'vec3(0.0)';
              if (conn) {
                evaluateNode(conn.fromNode);
                const fromNodeObj = graph.nodes.find(n => n.id === conn.fromNode);
                if (fromNodeObj) {
                  const outs = getEffectiveOutputs(fromNodeObj);
                  const outSocket = outs.find(o => o.id === conn.fromSocket);
                  inType = outSocket ? outSocket.type : 'float';
                  inExpr = `${conn.fromNode}_${conn.fromSocket}`;
                }
              }
              nodeStatements.push(`${inType} ${varPrefix}_out = ${inExpr};`);
              break;
            }
          }

          evalStack.delete(nodeId);
          evaluatedNodes.add(nodeId);
        };

        return {
          headerCode,
          nodeStatements,
          evaluateNode,
          customFunctions: () => customFunctions
        };
      }

      generateGLSL(graph) {
        const outputNode = graph.nodes.find(n => NODE_DEFINITIONS[n.type].isOutputNode);
        if (!outputNode) {
          return { error: '出力ノードが見つかりません。' };
        }

        const built = this.buildEvaluationContext(graph);
        built.evaluateNode(outputNode.id);

        const fullCode = `${built.headerCode}\n${built.customFunctions()}void main() {\n  ${built.nodeStatements.join('\n  ')}\n}`;
        return { code: fullCode };
      }

      // 任意のノードを起点に、そのノードの現在値を可視化するフラグメントシェーダーを生成する
      // （Viewerノードの、ノード上プレビュー用）
      generateGLSLFromNode(graph, rootNodeId) {
        const rootNode = graph.nodes.find(n => n.id === rootNodeId);
        if (!rootNode) {
          return { error: 'ノードが見つかりません。' };
        }

        const built = this.buildEvaluationContext(graph);
        built.evaluateNode(rootNodeId);

        const rootDef = NODE_DEFINITIONS[rootNode.type];
        if (!rootDef.isOutputNode) {
          const outs = getEffectiveOutputs(rootNode);
          const primary = outs[0];
          if (primary) {
            const varName = `${rootNodeId}_${primary.id}`;
            let colorExpr = varName;
            if (primary.type === 'float') colorExpr = `vec3(${varName})`;
            else if (primary.type === 'vec2') colorExpr = `vec3(${varName}, 0.0)`;
            built.nodeStatements.push(`gl_FragColor = vec4(${colorExpr}, 1.0);`);
          } else {
            built.nodeStatements.push(`gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);`);
          }
        }

        const fullCode = `${built.headerCode}\n${built.customFunctions()}void main() {\n  ${built.nodeStatements.join('\n  ')}\n}`;
        return { code: fullCode };
      }

      compileAndRender(graph) {
        const gl = this.gl;
        if (!gl) return;

        const res = this.generateGLSL(graph);
        if (res.error) {
          showError(res.error);
          return;
        }

        const fragmentSource = res.code;
        document.getElementById('glslCodePreview').textContent = fragmentSource;
        document.getElementById('fullGlslCode').textContent = fragmentSource;

        const vs = this.createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE, true);
        const fs = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentSource, true);

        if (!vs || !fs) return;

        const program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
          showError('プログラムリンクエラー: ' + gl.getProgramInfoLog(program));
          return;
        }

        hideError();
        this.program = program;
      }

      // reportErrors=false の場合、Viewerノードのミニプレビューなど
      // メインのエラー表示を汚したくない箇所からのコンパイル失敗を静かに無視する
      createShader(gl, type, source, reportErrors = false) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          if (reportErrors) {
            const info = gl.getShaderInfoLog(shader);
            showError('シェーダーコンパイルエラー:\n' + info);
          }
          gl.deleteShader(shader);
          return null;
        }
        return shader;
      }

      // Viewerノード用の小さなWebGLコンテキストを用意する（キャンバスが変わっていれば作り直す）
      ensureViewerRenderer(nodeId, canvas) {
        let vr = this.viewerRenderers.get(nodeId);
        if (vr && vr.canvas === canvas) return vr;

        const gl = canvas.getContext('webgl');
        if (!gl) return null;

        vr = { canvas, gl, program: null, positionBuffer: this.createQuadBuffer(gl) };
        this.viewerRenderers.set(nodeId, vr);
        return vr;
      }

      removeViewerRenderer(nodeId) {
        this.viewerRenderers.delete(nodeId);
      }

      // Viewerノードのプレビュー用シェーダーを（再）コンパイルする
      compileViewerNode(graph, node) {
        const canvasEl = document.querySelector(`#${node.id} .node-viewer-canvas`);
        if (!canvasEl) return;

        const vr = this.ensureViewerRenderer(node.id, canvasEl);
        if (!vr) return;

        const res = this.generateGLSLFromNode(graph, node.id);
        if (res.error) {
          vr.program = null;
          return;
        }

        const vs = this.createShader(vr.gl, vr.gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE, false);
        const fs = this.createShader(vr.gl, vr.gl.FRAGMENT_SHADER, res.code, false);
        if (!vs || !fs) {
          vr.program = null;
          return;
        }

        const program = vr.gl.createProgram();
        vr.gl.attachShader(program, vs);
        vr.gl.attachShader(program, fs);
        vr.gl.linkProgram(program);

        if (!vr.gl.getProgramParameter(program, vr.gl.LINK_STATUS)) {
          vr.program = null;
          return;
        }

        vr.program = program;
      }

      // Viewerノードのミニキャンバスを1フレーム描画する
      renderViewerNode(nodeId) {
        const vr = this.viewerRenderers.get(nodeId);
        if (!vr || !vr.program) return;

        const gl = vr.gl;
        gl.viewport(0, 0, vr.canvas.width, vr.canvas.height);
        gl.useProgram(vr.program);

        const resLocation = gl.getUniformLocation(vr.program, 'u_resolution');
        gl.uniform2f(resLocation, vr.canvas.width, vr.canvas.height);

        const timeLocation = gl.getUniformLocation(vr.program, 'u_time');
        gl.uniform1f(timeLocation, (Date.now() - this.startTime) / 1000.0);

        const posAttr = gl.getAttribLocation(vr.program, 'a_position');
        gl.enableVertexAttribArray(posAttr);
        gl.bindBuffer(gl.ARRAY_BUFFER, vr.positionBuffer);
        gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      render() {
        const gl = this.gl;
        if (!gl || !this.program) return;

        gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        gl.useProgram(this.program);

        const resLocation = gl.getUniformLocation(this.program, 'u_resolution');
        gl.uniform2f(resLocation, this.canvas.width, this.canvas.height);

        const timeLocation = gl.getUniformLocation(this.program, 'u_time');
        const elapsed = (Date.now() - this.startTime) / 1000.0;
        gl.uniform1f(timeLocation, elapsed);

        const posAttr = gl.getAttribLocation(this.program, 'a_position');
        gl.enableVertexAttribArray(posAttr);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
    }

    // ── グローバル変数・ヘルパー ──
    let graph;
    let compiler;

    function showError(msg) {
      const banner = document.getElementById('errorBanner');
      banner.style.display = 'block';
      banner.textContent = msg;
    }

    function hideError() {
      const banner = document.getElementById('errorBanner');
      banner.style.display = 'none';
    }

    // 2つの#RRGGBB色をtで線形補間する（Color RampのEaseプレビュー用）
    function mixHexColor(hexA, hexB, t) {
      const a = [1, 3, 5].map(i => parseInt(hexA.slice(i, i + 2), 16));
      const b = [1, 3, 5].map(i => parseInt(hexB.slice(i, i + 2), 16));
      const mixed = a.map((v, i) => Math.round(v + (b[i] - v) * t));
      return `#${mixed.map(v => Math.max(0, Math.min(255, v)).toString(16).padStart(2, '0')).join('')}`;
    }

    // 'vec3(0.0)' や 'vec3(1.0, 0.5, 0.2)' のようなGLSLリテラルを#RRGGBBに変換する
    // （未接続のベクトル入力ソケットの初期値を色ピッカーに表示するため）
    function glslVec3ToHex(glslStr) {
      const m = /vec3\(([^)]*)\)/.exec(glslStr || '');
      if (!m) return '#000000';
      const parts = m[1].split(',').map(s => parseFloat(s.trim()));
      const r = isNaN(parts[0]) ? 0 : parts[0];
      const g = parts.length > 1 && !isNaN(parts[1]) ? parts[1] : r;
      const b = parts.length > 2 && !isNaN(parts[2]) ? parts[2] : r;
      const toHex = v => Math.round(Math.max(0, Math.min(1, v)) * 255).toString(16).padStart(2, '0');
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    // #RRGGBB を GLSLのvec3(r, g, b)リテラルに変換する
    function hexToGlslVec3(hex) {
      const r = (parseInt(hex.slice(1, 3), 16) / 255).toFixed(3);
      const g = (parseInt(hex.slice(3, 5), 16) / 255).toFixed(3);
      const b = (parseInt(hex.slice(5, 7), 16) / 255).toFixed(3);
      return `vec3(${r}, ${g}, ${b})`;
    }

    function showToast(msg) {
      const toast = document.getElementById('toastMsg');
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
    }

    function buildNodePalette() {
      const palette = document.getElementById('nodePalette');
      const categories = {
        input: { name: '入力 (Input)', class: 'cat-input' },
        texture: { name: 'テクスチャ/パターン', class: 'cat-texture' },
        math: { name: '演算 (Math)', class: 'cat-math' },
        vector: { name: 'ベクトル (Vector)', class: 'cat-vector' },
        color: { name: 'カラー (Color)', class: 'cat-color' },
        output: { name: '出力 (Output)', class: 'cat-output' },
        viewer: { name: 'ビューワー (Viewer)', class: 'cat-viewer' }
      };

      Object.keys(categories).forEach(catKey => {
        const catGroup = document.createElement('div');
        
        const title = document.createElement('div');
        title.className = 'category-title';
        title.textContent = categories[catKey].name;
        catGroup.appendChild(title);

        Object.keys(NODE_DEFINITIONS).forEach(type => {
          const def = NODE_DEFINITIONS[type];
          if (def.category === catKey) {
            const item = document.createElement('div');
            item.className = 'palette-item';
            item.innerHTML = `
              <span class="node-type-dot ${categories[catKey].class}"></span>
              <span>${def.title}</span>
            `;
            item.addEventListener('click', () => {
              const rect = graph.containerEl.getBoundingClientRect();
              const centerWorld = graph.screenToWorld(rect.left + rect.width / 2, rect.top + rect.height / 2);
              const x = centerWorld.x - 90 + (Math.random() * 40 - 20);
              const y = centerWorld.y - 40 + (Math.random() * 40 - 20);
              graph.createNode(type, x, y);
            });
            catGroup.appendChild(item);
          }
        });

        palette.appendChild(catGroup);
      });
    }

    // ── ノードグラフのJSON書き出し／読み込み（ファイル・Googleドライブ共通） ──
    function buildGraphExportData() {
      return {
        version: 1,
        nextId: graph.nextId,
        nodes: graph.nodes.map(n => {
          const out = {
            id: n.id, type: n.type, title: n.title, x: n.x, y: n.y,
            controlsVal: n.controlsVal, inputsVal: n.inputsVal
          };
          if (n.stops) {
            out.stops = n.stops;
            out.activeStopIndex = n.activeStopIndex;
          }
          return out;
        }),
        connections: graph.connections.map(c => ({
          id: c.id, fromNode: c.fromNode, fromSocket: c.fromSocket, toNode: c.toNode, toSocket: c.toSocket
        }))
      };
    }

    function exportGraphJSON() {
      const data = buildGraphExportData();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `shader-node-graph-${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      showToast('ノードグラフをJSONとしてダウンロードしました');
    }

    // パース済みのグラフJSONを現在のグラフに適用する（ファイル読み込み・Driveからの読み込み共通処理）
    function applyGraphJSON(data) {
      if (!data || !Array.isArray(data.nodes) || !Array.isArray(data.connections)) {
        throw new Error('不正なファイル形式です');
      }

      graph.clear();

      data.nodes.forEach(n => {
        if (!n || !NODE_DEFINITIONS[n.type]) return;
        const node = {
          id: n.id,
          type: n.type,
          title: n.title || NODE_DEFINITIONS[n.type].title,
          x: typeof n.x === 'number' ? n.x : 0,
          y: typeof n.y === 'number' ? n.y : 0,
          controlsVal: n.controlsVal || {},
          inputsVal: n.inputsVal || {}
        };
        if (n.stops) {
          node.stops = n.stops;
          node.activeStopIndex = n.activeStopIndex || 0;
        }
        graph.nodes.push(node);
      });

      const validNodeIds = new Set(graph.nodes.map(n => n.id));
      graph.connections = data.connections.filter(c =>
        c && validNodeIds.has(c.fromNode) && validNodeIds.has(c.toNode)
      );

      let maxIdNum = 0;
      graph.nodes.forEach(n => {
        const match = /^node_(\d+)$/.exec(n.id);
        if (match) maxIdNum = Math.max(maxIdNum, parseInt(match[1], 10));
      });
      graph.nextId = typeof data.nextId === 'number' ? Math.max(data.nextId, maxIdNum + 1) : maxIdNum + 1;

      if (!graph.nodes.some(n => NODE_DEFINITIONS[n.type] && NODE_DEFINITIONS[n.type].isOutputNode)) {
        graph.nodes.push({
          id: `node_${graph.nextId++}`,
          type: 'output',
          title: NODE_DEFINITIONS.output.title,
          x: 300, y: 150,
          controlsVal: {}, inputsVal: {}
        });
      }

      graph.nodes.forEach(n => graph.renderNode(n));
      graph.updateGraph();
    }

    function importGraphJSON(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          applyGraphJSON(JSON.parse(e.target.result));
          showToast('JSONからノードグラフを読み込みました');
        } catch (err) {
          showToast('読み込みに失敗しました: ' + err.message);
        }
      };
      reader.readAsText(file);
    }

    function loadPreset(name) {
      graph.clear();

      if (name === 'rainbow') {
        const uv = graph.createNode('uv', 40, 60);
        const time = graph.createNode('time', 40, 200);
        const math1 = graph.createNode('math', 260, 100);
        const math2 = graph.createNode('math', 480, 100);
        const combine = graph.createNode('combineRgb', 700, 100);
        const out = graph.createNode('output', 920, 100);

        math1.controlsVal.op = 'ADD';
        math2.controlsVal.op = 'SIN';

        graph.connections.push(
          { id: 'c1', fromNode: uv.id, fromSocket: 'uv', toNode: math1.id, toSocket: 'a' },
          { id: 'c2', fromNode: time.id, fromSocket: 'time', toNode: math1.id, toSocket: 'b' },
          { id: 'c3', fromNode: math1.id, fromSocket: 'val', toNode: math2.id, toSocket: 'a' },
          { id: 'c4', fromNode: math2.id, fromSocket: 'val', toNode: combine.id, toSocket: 'r' },
          { id: 'c5', fromNode: uv.id, fromSocket: 'uv', toNode: combine.id, toSocket: 'g' },
          { id: 'c6', fromNode: combine.id, fromSocket: 'color', toNode: out.id, toSocket: 'color' }
        );
      } else if (name === 'marble') {
        const uv = graph.createNode('uv', 40, 80);
        const perlin = graph.createNode('perlin', 260, 80);
        const math = graph.createNode('math', 480, 80);
        const colorRamp = graph.createNode('colorRamp', 700, 80);
        const out = graph.createNode('output', 920, 80);

        math.controlsVal.op = 'SIN';
        colorRamp.stops = [
          { pos: 0.0, color: '#12100e' },
          { pos: 1.0, color: '#e8d8c8' }
        ];
        graph.renderNode(colorRamp);

        graph.connections.push(
          { id: 'c1', fromNode: uv.id, fromSocket: 'uv', toNode: perlin.id, toSocket: 'uv' },
          { id: 'c2', fromNode: perlin.id, fromSocket: 'fac', toNode: math.id, toSocket: 'a' },
          { id: 'c3', fromNode: math.id, fromSocket: 'val', toNode: colorRamp.id, toSocket: 'fac' },
          { id: 'c4', fromNode: colorRamp.id, fromSocket: 'color', toNode: out.id, toSocket: 'color' }
        );
      } else if (name === 'voronoi') {
        const uv = graph.createNode('uv', 40, 80);
        const voronoi = graph.createNode('voronoi', 260, 80);
        const colorRamp = graph.createNode('colorRamp', 480, 80);
        const out = graph.createNode('output', 700, 80);

        colorRamp.stops = [
          { pos: 0.0, color: '#0f2027' },
          { pos: 1.0, color: '#2c5364' }
        ];
        graph.renderNode(colorRamp);

        graph.connections.push(
          { id: 'c1', fromNode: uv.id, fromSocket: 'uv', toNode: voronoi.id, toSocket: 'uv' },
          { id: 'c2', fromNode: voronoi.id, fromSocket: 'fac', toNode: colorRamp.id, toSocket: 'fac' },
          { id: 'c3', fromNode: colorRamp.id, fromSocket: 'color', toNode: out.id, toSocket: 'color' }
        );
      } else if (name === 'sunburst') {
        const uv = graph.createNode('uv', 40, 80);
        const time = graph.createNode('time', 40, 220);
        const checker = graph.createNode('checker', 260, 80);
        const mix = graph.createNode('mix', 500, 80);
        const out = graph.createNode('output', 720, 80);

        graph.connections.push(
          { id: 'c1', fromNode: uv.id, fromSocket: 'uv', toNode: checker.id, toSocket: 'uv' },
          { id: 'c2', fromNode: checker.id, fromSocket: 'fac', toNode: mix.id, toSocket: 'fac' },
          { id: 'c3', fromNode: mix.id, fromSocket: 'out', toNode: out.id, toSocket: 'color' }
        );
      } else if (name === 'clear') {
        graph.createNode('output', 300, 150);
      }

      graph.updateGraph();
    }

    // ── Googleログイン & Googleドライブ連携 ──
    // 「drive.file」スコープは、このアプリ自身が作成したファイル／フォルダにのみアクセスできる
    // 最小権限のスコープ（ユーザーのDrive内の他のファイルは一切見えない）。
    const GOOGLE_DRIVE_SCOPE = 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile';
    const GOOGLE_DRIVE_FOLDER_NAME = 'ShaderNode Studio Projects';

    // Google Cloud ConsoleでこのGitHub Pagesの生成元向けに発行したOAuthクライアントID。
    // クライアントIDは秘密情報ではない（承認済みJavaScript生成元でアクセス元を制限しているため
    // 公開リポジトリに含めて問題ない）ので、直接埋め込んでいる。
    const GOOGLE_OAUTH_CLIENT_ID = '943232530252-fm6csvmjm62b8a89nhqsel5bp8g2o65e.apps.googleusercontent.com';

    let googleTokenClient = null;
    let googleAccessToken = null;
    let googleDriveFolderId = null;

    function ensureGoogleTokenClient() {
      if (googleTokenClient) return googleTokenClient;
      if (!window.google || !window.google.accounts || !window.google.accounts.oauth2) {
        showToast('Google Identity Servicesの読み込みに失敗しました。通信環境を確認してください。');
        return null;
      }
      googleTokenClient = google.accounts.oauth2.initTokenClient({
        client_id: GOOGLE_OAUTH_CLIENT_ID,
        scope: GOOGLE_DRIVE_SCOPE,
        callback: '' // 呼び出し時に都度差し替える
      });
      return googleTokenClient;
    }

    function handleGoogleLogin() {
      const client = ensureGoogleTokenClient();
      if (!client) return;

      client.callback = async (resp) => {
        if (resp.error) {
          showToast('Googleログインに失敗しました: ' + resp.error);
          return;
        }
        googleAccessToken = resp.access_token;
        try {
          const profile = await driveApiFetchRaw('https://www.googleapis.com/oauth2/v3/userinfo').then(r => r.json());
          updateGoogleSignedInUI(profile);
          showToast(`${profile.name || 'Google'} としてログインしました`);
        } catch (err) {
          updateGoogleSignedInUI(null);
          showToast('ログインしましたが、プロフィール情報の取得に失敗しました');
        }
      };
      googleTokenClient.requestAccessToken({ prompt: 'consent' });
    }

    function handleGoogleLogout() {
      if (googleAccessToken && window.google && google.accounts.oauth2.revoke) {
        google.accounts.oauth2.revoke(googleAccessToken, () => {});
      }
      googleAccessToken = null;
      googleDriveFolderId = null;
      document.getElementById('googleSignedOut').style.display = '';
      document.getElementById('googleSignedIn').style.display = 'none';
      showToast('ログアウトしました');
    }

    function updateGoogleSignedInUI(profile) {
      document.getElementById('googleSignedOut').style.display = 'none';
      document.getElementById('googleSignedIn').style.display = 'flex';
      if (profile) {
        document.getElementById('googleUserName').textContent = profile.name || '';
        const avatar = document.getElementById('googleUserAvatar');
        if (profile.picture) {
          avatar.src = profile.picture;
          avatar.style.display = '';
        } else {
          avatar.style.display = 'none';
        }
      }
    }

    async function driveApiFetchRaw(url, options = {}) {
      const res = await fetch(url, {
        ...options,
        headers: {
          ...(options.headers || {}),
          Authorization: `Bearer ${googleAccessToken}`
        }
      });
      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`Drive API error (${res.status}): ${text}`);
      }
      return res;
    }

    async function driveFindOrCreateFolder() {
      if (googleDriveFolderId) return googleDriveFolderId;

      const q = encodeURIComponent(
        `name = '${GOOGLE_DRIVE_FOLDER_NAME}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`
      );
      const searchRes = await driveApiFetchRaw(
        `https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(id,name)`
      ).then(r => r.json());

      if (searchRes.files && searchRes.files.length > 0) {
        googleDriveFolderId = searchRes.files[0].id;
        return googleDriveFolderId;
      }

      const createRes = await driveApiFetchRaw('https://www.googleapis.com/drive/v3/files', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: GOOGLE_DRIVE_FOLDER_NAME,
          mimeType: 'application/vnd.google-apps.folder'
        })
      }).then(r => r.json());

      googleDriveFolderId = createRes.id;
      return googleDriveFolderId;
    }

    async function driveSaveCurrentGraph() {
      const defaultName = `shader-node-graph-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.json`;
      const filename = window.prompt('保存するファイル名を入力してください:', defaultName);
      if (!filename) return;

      try {
        showToast('Googleドライブに保存しています...');
        const folderId = await driveFindOrCreateFolder();
        const data = buildGraphExportData();

        const metadata = { name: filename, parents: [folderId], mimeType: 'application/json' };
        const boundary = 'shadernode_boundary_' + Date.now();
        const body =
          `--${boundary}\r\n` +
          `Content-Type: application/json; charset=UTF-8\r\n\r\n` +
          `${JSON.stringify(metadata)}\r\n` +
          `--${boundary}\r\n` +
          `Content-Type: application/json\r\n\r\n` +
          `${JSON.stringify(data, null, 2)}\r\n` +
          `--${boundary}--`;

        await driveApiFetchRaw(
          'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name',
          {
            method: 'POST',
            headers: { 'Content-Type': `multipart/related; boundary=${boundary}` },
            body
          }
        );

        showToast(`「${filename}」をGoogleドライブに保存しました`);
      } catch (err) {
        showToast('保存に失敗しました: ' + err.message);
      }
    }

    async function driveOpenLoadModal() {
      const modal = document.getElementById('driveModal');
      const listEl = document.getElementById('driveFileList');
      listEl.innerHTML = '<div style="color: #888; font-size: 12px;">読み込み中...</div>';
      modal.classList.add('active');

      try {
        const folderId = await driveFindOrCreateFolder();
        const q = encodeURIComponent(`'${folderId}' in parents and trashed = false`);
        const res = await driveApiFetchRaw(
          `https://www.googleapis.com/drive/v3/files?q=${q}&orderBy=modifiedTime desc&fields=files(id,name,modifiedTime)`
        ).then(r => r.json());

        const files = res.files || [];
        if (files.length === 0) {
          listEl.innerHTML = '<div style="color: #888; font-size: 12px;">保存されたファイルはまだありません</div>';
          return;
        }

        listEl.innerHTML = '';
        files.forEach(file => {
          const item = document.createElement('div');
          item.className = 'drive-file-item';

          const info = document.createElement('div');
          const nameEl = document.createElement('div');
          nameEl.className = 'drive-file-name';
          nameEl.textContent = file.name;
          const dateEl = document.createElement('div');
          dateEl.className = 'drive-file-date';
          dateEl.textContent = new Date(file.modifiedTime).toLocaleString('ja-JP');
          info.appendChild(nameEl);
          info.appendChild(dateEl);

          const loadBtn = document.createElement('button');
          loadBtn.className = 'btn';
          loadBtn.textContent = '読み込む';
          loadBtn.addEventListener('click', () => driveLoadFile(file.id, file.name));

          item.appendChild(info);
          item.appendChild(loadBtn);
          listEl.appendChild(item);
        });
      } catch (err) {
        listEl.innerHTML = `<div style="color: #ff8a80; font-size: 12px;">読み込み一覧の取得に失敗しました: ${err.message}</div>`;
      }
    }

    async function driveLoadFile(fileId, fileName) {
      try {
        const data = await driveApiFetchRaw(
          `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`
        ).then(r => r.json());

        applyGraphJSON(data);
        document.getElementById('driveModal').classList.remove('active');
        showToast(`「${fileName}」を読み込みました`);
      } catch (err) {
        showToast('読み込みに失敗しました: ' + err.message);
      }
    }

    function initGoogleIntegration() {
      document.getElementById('btnGoogleLogin').addEventListener('click', handleGoogleLogin);
      document.getElementById('btnGoogleLogout').addEventListener('click', handleGoogleLogout);
      document.getElementById('btnDriveSave').addEventListener('click', () => {
        if (!googleAccessToken) { showToast('先にGoogleでログインしてください'); return; }
        driveSaveCurrentGraph();
      });
      document.getElementById('btnDriveLoad').addEventListener('click', () => {
        if (!googleAccessToken) { showToast('先にGoogleでログインしてください'); return; }
        driveOpenLoadModal();
      });
      document.getElementById('closeDriveModal').addEventListener('click', () => {
        document.getElementById('driveModal').classList.remove('active');
      });
    }

    // ── アプリ起動スクリプト ──
    window.onload = () => {
      compiler = new ShaderCompiler();
      graph = new ShaderNodeGraph();

      buildNodePalette();

      loadPreset('rainbow');

      document.getElementById('presetSelect').addEventListener('change', (e) => {
        loadPreset(e.target.value);
      });

      document.getElementById('btnClear').addEventListener('click', () => {
        loadPreset('clear');
        showToast('キャンバスをクリアしました');
      });

      const modal = document.getElementById('codeModal');
      document.getElementById('btnViewCode').addEventListener('click', () => {
        modal.classList.add('active');
      });
      document.getElementById('closeModal').addEventListener('click', () => {
        modal.classList.remove('active');
      });

      document.getElementById('btnExportJson').addEventListener('click', () => exportGraphJSON());

      const importInput = document.getElementById('importJsonInput');
      document.getElementById('btnImportJson').addEventListener('click', () => importInput.click());
      importInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) importGraphJSON(file);
        e.target.value = '';
      });

      const btnToggleSelect = document.getElementById('btnToggleSelect');
      if (btnToggleSelect) {
        btnToggleSelect.addEventListener('click', () => {
          graph.setTouchSelectMode(!graph.touchSelectMode);
        });
      }

      initGoogleIntegration();

      function renderLoop() {
        compiler.render();
        graph.nodes.forEach(n => {
          if (n.type === 'viewer') compiler.renderViewerNode(n.id);
        });
        requestAnimationFrame(renderLoop);
      }
      renderLoop();
    };
