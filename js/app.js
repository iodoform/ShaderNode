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
      }
    };

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

        this.wrapperEl = document.getElementById('nodeWrapper');
        this.svgEl = document.getElementById('svgConnections');
        this.containerEl = document.getElementById('canvasContainer');
        this.selectionBoxEl = document.getElementById('selectionBox');

        this.initEventListeners();
        this.initKeyboardShortcuts();
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
            showToast('ドラッグしてノードを矩形選択します');
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

        toDelete.forEach(nodeId => {
          const node = this.nodes.find(n => n.id === nodeId);
          if (node && !NODE_DEFINITIONS[node.type].isOutputNode) {
            this.connections = this.connections.filter(
              c => !(c.fromNode === nodeId || c.toNode === nodeId)
            );
            this.nodes = this.nodes.filter(n => n.id !== nodeId);
            const el = document.getElementById(nodeId);
            if (el) el.remove();

            this.selectedNodeIds.delete(nodeId);
            deletedCount++;
          }
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

        this.connections = this.connections.filter(
          c => !(c.fromNode === nodeId || c.toNode === nodeId)
        );

        this.nodes = this.nodes.filter(n => n.id !== nodeId);
        this.selectedNodeIds.delete(nodeId);
        const el = document.getElementById(nodeId);
        if (el) el.remove();

        this.updateGraph();
      }

      renderNode(node) {
        // 重複レンダー防止：既存の同一IDノードエレメントを削除
        const existingEl = document.getElementById(node.id);
        if (existingEl) existingEl.remove();

        const def = NODE_DEFINITIONS[node.type];
        const nodeEl = document.createElement('div');
        nodeEl.className = 'node';
        nodeEl.id = node.id;
        nodeEl.style.transform = `translate(${node.x}px, ${node.y}px)`;

        const headerEl = document.createElement('div');
        headerEl.className = 'node-header';
        headerEl.style.backgroundColor = def.color;
        
        const titleSpan = document.createElement('span');
        titleSpan.className = 'node-title';
        titleSpan.textContent = node.title;
        headerEl.appendChild(titleSpan);

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

        headerEl.addEventListener('mousedown', (e) => {
          if (e.button !== 0) return;

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
        });

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
              this.updateGraph();
            });
            rampContainer.appendChild(select);
          }

          const rampBar = document.createElement('div');
          rampBar.className = 'color-ramp-bar';
          
          const updateRampBarGradient = () => {
            const sortedStops = [...node.stops].sort((a, b) => a.pos - b.pos);
            const stopStrs = sortedStops.map(s => `${s.color} ${(s.pos * 100).toFixed(1)}%`);
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

              stopEl.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                node.activeStopIndex = idx;
                renderStops();
                updateColorInput();

                const onMove = (moveEvt) => {
                  const barRect = rampBar.getBoundingClientRect();
                  let newPos = (moveEvt.clientX - barRect.left) / barRect.width;
                  stop.pos = Math.min(Math.max(newPos, 0.0), 1.0);
                  stopEl.style.left = `${stop.pos * 100}%`;
                  if (posInput) posInput.value = stop.pos.toFixed(2);
                  updateRampBarGradient();
                  this.updateGraph();
                };
                const onUp = () => {
                  window.removeEventListener('mousemove', onMove);
                  window.removeEventListener('mouseup', onUp);
                };
                window.addEventListener('mousemove', onMove);
                window.addEventListener('mouseup', onUp);
              });

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
                this.updateGraph();
              });
              ctrlContainer.appendChild(select);
            } else if (ctrl.type === 'number') {
              const input = document.createElement('input');
              input.type = 'number';
              input.className = 'node-input-text';
              input.value = node.controlsVal[ctrl.id];
              input.step = ctrl.step || 'any';
              input.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                node.controlsVal[ctrl.id] = isNaN(val) ? 0 : val;
                this.updateGraph();
              });
              ctrlContainer.appendChild(input);
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

        const socketsEl = document.createElement('div');
        socketsEl.className = 'sockets-container';

        const inputsCol = document.createElement('div');
        inputsCol.className = 'sockets-column inputs';
        if (def.inputs) {
          def.inputs.forEach(inp => {
            const row = document.createElement('div');
            row.className = 'socket-row';

            const pin = document.createElement('div');
            pin.className = 'socket-pin';
            pin.dataset.nodeId = node.id;
            pin.dataset.socketId = inp.id;
            pin.dataset.isOutput = 'false';
            pin.dataset.type = inp.type;

            pin.style.borderColor = this.getSocketColor(inp.type);

            pin.addEventListener('mousedown', (e) => this.onSocketMouseDown(e, node.id, inp.id, false, inp.type));

            const label = document.createElement('span');
            label.className = 'socket-label';
            label.textContent = inp.label;

            row.appendChild(pin);
            row.appendChild(label);
            inputsCol.appendChild(row);
          });
        }

        const outputsCol = document.createElement('div');
        outputsCol.className = 'sockets-column outputs';
        if (def.outputs) {
          def.outputs.forEach(out => {
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

            pin.addEventListener('mousedown', (e) => this.onSocketMouseDown(e, node.id, out.id, true, out.type));

            row.appendChild(label);
            row.appendChild(pin);
            outputsCol.appendChild(row);
          });
        }

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

              this.updateGraph();
            }
          }

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
        this.connections = this.connections.filter(c => c.id !== connId);
        this.updateGraph();
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
      }

      clear() {
        this.nodes = [];
        this.connections = [];
        this.wrapperEl.innerHTML = '';
        this.updateGraph();
      }
    }

    // ── GLSLコードジェネレータ＆コンパイラ ──
    class ShaderCompiler {
      constructor() {
        this.canvas = document.getElementById('shaderCanvas');
        this.gl = this.canvas.getContext('webgl');
        this.program = null;
        this.startTime = Date.now();

        if (!this.gl) {
          showError('お使いのブラウザはWebGLに対応していません。');
          return;
        }

        this.initGL();
      }

      initGL() {
        const gl = this.gl;

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

        this.positionBuffer = positionBuffer;
      }

      generateGLSL(graph) {
        const outputNode = graph.nodes.find(n => NODE_DEFINITIONS[n.type].isOutputNode);
        if (!outputNode) {
          return { error: '出力ノードが見つかりません。' };
        }

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

              const fromDef = NODE_DEFINITIONS[fromNodeObj.type];
              const outSocket = fromDef.outputs ? fromDef.outputs.find(o => o.id === conn.fromSocket) : null;
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
          }

          evalStack.delete(nodeId);
          evaluatedNodes.add(nodeId);
        };

        evaluateNode(outputNode.id);

        const fullCode = `${headerCode}\n${customFunctions}void main() {\n  ${nodeStatements.join('\n  ')}\n}`;
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

        const vsSource = `
          attribute vec2 a_position;
          void main() {
            gl_Position = vec4(a_position, 0.0, 1.0);
          }
        `;

        const vs = this.createShader(gl, gl.VERTEX_SHADER, vsSource);
        const fs = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);

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

      createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          const info = gl.getShaderInfoLog(shader);
          showError('シェーダーコンパイルエラー:\n' + info);
          gl.deleteShader(shader);
          return null;
        }
        return shader;
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
        output: { name: '出力 (Output)', class: 'cat-output' }
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

      function renderLoop() {
        compiler.render();
        requestAnimationFrame(renderLoop);
      }
      renderLoop();
    };
