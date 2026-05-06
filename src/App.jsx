import React, { useState } from 'react';

// ============================================================
// 🎨 CAPA 1: ESTILOS Y PINCELES (Configuración Visual)
// ============================================================
const oroPremium = "linear-gradient(180deg, #fcf6ba 0%, #bf953f 45%, #8a6e2f 70%, #fcf6ba 100%)";

const App = () => {
  // ============================================================
  // 🧠 CAPA 2: EL CEREBRO (Lógica y Estados)
  // ============================================
  const [carrito, setCarrito] = useState([]);
    const COSTO_ENVIO = 3000;
    const [categoriaActual, setCategoriaActual] = useState('COMBINADOS');
    const [mostrarResumen, setMostrarResumen] = useState(false);
    const [metodoPago, setMetodoPago] = useState('Efectivo');
    const [copiado, setCopiado] = useState(false);
  
    const seleccionarPago = (metodo) => {
      console.log('Copiando...');
      setMetodoPago(metodo);
      if (metodo === 'Mercado Pago') {
        const alias = "SUSHI-FAN.MP";
        setCopiado(true);
        
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(alias);
        } else {
          const textArea = document.createElement("textarea");
          textArea.value = alias;
          textArea.style.position = "fixed";
          textArea.style.left = "-999999px";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          try { document.execCommand('copy'); } catch (err) { console.error(err); }
          document.body.removeChild(textArea);
        }
        setTimeout(() => setCopiado(false), 3000);
      }
    };
    const [direccion, setDireccion] = useState('');
    const [notas, setNotas] = useState('');

  // LISTADO DE PRODUCTOS (Tu inventario)
  const [productos] = useState([
    //COMBINADOS
    { id: 1, nombre: 'Combinado 15p', precio: 34500, cat: 'COMBINADOS', img: 'productos/combinado-15p.webp' }, 
    { id: 2, nombre: 'Combinado 30p', precio: 55500, cat: 'COMBINADOS', img: 'productos/combinado-30p.webp'}, 
    { id: 3, nombre: 'Combinado 45p', precio: 71500, cat: 'COMBINADOS', img: 'productos/combinado-45p.webp'}, 
    { id: 4, nombre: 'Combinado 60p', precio: 85500, cat: 'COMBINADOS', img: 'productos/combinado-60p.webp'}, 
    { id: 5, nombre: 'Roll & Roll 30p', precio: 71500, cat: 'COMBINADOS', img: 'productos/roll-y-roll-30p.webp'},
    { id: 6, nombre: 'Sushi Fan 30p', precio: 71500, cat: 'COMBINADOS', img: 'productos/sushi-fan-30p.webp'}, 
    //ROLLS
    { id: 7, nombre: 'Avocado 8p', precio: 22000, cat: 'ROLLS', img: 'productos/avocado-8p.webp'}, 
    { id: 8, nombre: 'Buenos Aires 8p', precio: 23000, cat: 'ROLLS', img: 'productos/buenos-aires-8p.webp'}, 
    { id: 9, nombre: 'California 8p', precio: 17500, cat: 'ROLLS', img: 'productos/california-8p.webp'}, 
    { id: 10, nombre: 'Ceviche 4p', precio: 17500, cat: 'ROLLS', img: 'productos/ceviche-4p.webp'}, 
    { id: 11, nombre: 'Citrus 8p', precio: 20500, cat: 'ROLLS', img: 'productos/citrus-8p.webp'}, 
    { id: 12, nombre: 'Crazy 8p', precio: 20500, cat: 'ROLLS', img: 'productos/crazy-8p.webp'}, 
    { id: 13, nombre: 'Ebi Tempura 8p', precio: 22000, cat: 'ROLLS', img: 'productos/ebi-tempura-8p.webp'}, 
    { id: 14, nombre: 'Feel 8p', precio: 22000, cat: 'ROLLS', img: 'productos/feel-8p.webp'}, 
    { id: 15, nombre: 'Furay 8p', precio: 22000, cat: 'ROLLS', img: 'productos/furay-8p.webp'}, 
    { id: 16, nombre: 'Futurama 8p', precio: 22000, cat: 'ROLLS', img: 'productos/futurama-8p.webp'},
    { id: 17, nombre: 'Honey 8p', precio: 23000, cat: 'ROLLS', img: 'productos/honey-8p.webp'}, 
    { id: 18, nombre: 'Nikkei 4p', precio: 17500, cat: 'ROLLS', img: 'productos/nikkei-4p.webp'}, 
    { id: 19, nombre: 'Philadelphia 8p', precio: 22000, cat: 'ROLLS', img: 'productos/philadelphia-8p.webp'}, 
    { id: 20, nombre: 'Placer Real 8p', precio: 26000, cat: 'ROLLS', img: 'productos/placer-real-8p.webp'}, 
    { id: 21, nombre: 'Spf 8p', precio: 22000, cat: 'ROLLS', img: 'productos/spf-8p.webp'}, 
    { id: 22, nombre: 'Sc Evolution 8p', precio: 19000, cat: 'ROLLS', img: 'productos/sc-evolution-8p.webp'}, 
    { id: 23, nombre: 'Smoke 8p', precio: 31000, cat: 'ROLLS', img: 'productos/smoke-8p.webp'}, 
    { id: 24, nombre: 'Soul 8p', precio: 26000, cat: 'ROLLS', img: 'productos/soul-8p.webp'}, 
    { id: 25, nombre: 'Sweet 8p', precio: 22000, cat: 'ROLLS', img: 'productos/sweet-8p.webp'},
    //COCINA
    { id: 26, nombre: 'Arrollados Primavera 3u', precio: 15000, cat: 'COCINA', img: 'productos/arrollados-primavera-3u.webp'},
    { id: 27, nombre: 'Boom 6u', precio: 18500, cat: 'COCINA', img: 'productos/boom-6u.webp'}, 
    { id: 28, nombre: 'Langostinos Rebozados 6u', precio: 22000, cat: 'COCINA', img: 'productos/langostinos-rebozados-6u.webp'}, 
    { id: 29, nombre: 'Rabas 6u', precio: 22000, cat: 'COCINA', img: 'productos/rabas-6u.webp'},
    //MAKIS
    { id: 30, nombre: 'Maki Salmon 8p', precio: 22000, cat: 'MAKIS', img: 'productos/maki-salmon-8p.webp'}, 
    { id: 31, nombre: 'Maki Philadelphia 8p', precio: 22000, cat: 'MAKIS', img: 'productos/maki-philadelphia-8p.webp'}, 
    { id: 32, nombre: 'Maki Vegetariano 8p', precio: 17500, cat: 'MAKIS', img: 'productos/maki-vegetariano-8p.webp'}, 
    { id: 33, nombre: 'Maki Tuna 8p', precio: 20000, cat: 'MAKIS', img: 'productos/maki-tuna-8p.webp' },
    //TEMAKIS
    { id: 34, nombre: 'Temaki Langostino 1u', precio: 18500, cat: 'TEMAKIS', img: 'productos/temaki-langostino-1u.webp'},
    { id: 35, nombre: 'Temaki Salmon 1u', precio: 20500, cat: 'TEMAKIS', img: 'productos/temaki-salmon-1u.webp'}, 
    //SASHIMIS
    { id: 36, nombre: 'Sashimi Salmon 6p', precio: 19000, cat: 'SASHIMIS',img: 'productos/sashimi-salmon-6p.webp'}, 
    { id: 37, nombre: 'Sashimi Ahumado 6p', precio: 23500, cat: 'SASHIMIS', img: 'productos/sashimi-ahumado-6p.webp'}, 
    { id: 38, nombre: 'Sashimi Blanco 6p', precio: 14500, cat: 'SASHIMIS', img: 'productos/sashimi-blanco-6p.webp'},
    { id: 39, nombre: 'Sashimi Langostino 6p', precio: 18000, cat: 'SASHIMIS', img: 'productos/sashimi-langostino-6p.webp'},
    { id: 40, nombre: 'Sashimi Pulpo 6p', precio: 18000, cat: 'SASHIMIS', img: 'productos/sashimi-pulpo-6p.webp'},
    //NIGUIRIS
    { id: 41, nombre: 'Niguiri Salmon 6p', precio: 19000, cat: 'NIGUIRIS', img: 'productos/niguiri-salmon-6p.webp'},
    { id: 42, nombre: 'Niguiri Ahumado 6p', precio: 23500, cat: 'NIGUIRIS', img: 'productos/niguiri-ahumado-6p.webp'},
    { id: 43, nombre: 'Niguiri Langostino 6p', precio: 18000, cat: 'NIGUIRIS', img: 'productos/niguiri-langostino-6p.webp'},
    { id: 44, nombre: 'Niguiri Blanco 6p', precio: 14500, cat: 'NIGUIRIS', img: 'productos/niguiri-blanco-6p.webp'},
    { id: 45, nombre: 'Niguiri Pulpo 6p', precio: 18000, cat: 'NIGUIRIS', img: 'productos/niguiri-pulpo-6p.webp'},
    //GEISHAS
    { id: 46, nombre: 'Geisha Salmon 6p', precio: 19000, cat: 'GEISHAS', img: 'productos/geisha-salmon-6p.webp'}, 
    { id: 47, nombre: 'Geisha Ahumado 6p', precio: 23500, cat: 'GEISHAS', img: 'productos/geisha-ahumado-6p.webp'},
    { id: 48, nombre: 'Geisha Explosion 6p', precio: 19000, cat: 'GEISHAS', img: 'productos/geisha-explosion-6p.webp'}, 
    { id: 49, nombre: 'Geisha Langostino 6p', precio: 19000, cat: 'GEISHAS', img: 'productos/geisha-langostino-6p.webp'},
    //EXTRAS
    { id: 50, nombre: 'Salsa Buenos Aires 1u', precio: 2000, cat: 'EXTRAS', img: 'productos/salsa-buenos-aires-1u.webp'},
    { id: 51, nombre: 'Salsa Futurama 1u', precio: 2000, cat: 'EXTRAS', img: 'productos/salsa-futurama-1u.webp'},
    { id: 52, nombre: 'Salsa Mango 1u', precio: 2000, cat: 'EXTRAS', img: 'productos/salsa-mango-1u.webp'},
    { id: 53, nombre: 'Salsa Maracuya 1u', precio: 2000, cat: 'EXTRAS', img: 'productos/salsa-maracuya-1u.webp'},
    { id: 54, nombre: 'Wasabi jengibre 1u', precio: 2000, cat: 'EXTRAS', img: 'productos/wasabi-jengibre-1u.webp'},
  ]);

  //CATEGORIAS
  const categorias = ["COMBINADOS", "ROLLS", "COCINA", "MAKIS", "TEMAKIS", "SASHIMIS", "NIGUIRIS", "GEISHAS", "EXTRAS"];

  // FUNCIONES DE ACCIÓN
  const agregarAlCarrito = (p) => setCarrito([...carrito, p]);
  const quitarDelCarrito = (id) => {
    setCarrito((prev) => {
      const idx = prev.findLastIndex(i => i.id === id);
      if (idx === -1) return prev;
      const nuevo = [...prev];
      nuevo.splice(idx, 1);
      return nuevo;
    });
  };

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);
  const productosUnicos = [...new Set(carrito.map(item => item.id))].map(id => {
    const p = productos.find(prod => prod.id === id);
    return { ...p, cantidad: carrito.filter(item => item.id === id).length };
  });

  //FUNCIONES DE ENVIO
  const enviarWhatsApp = () => {
    if (!direccion.trim()) {
      alert("⚠️ Por favor, ingresá una dirección para el envío.");
      return;
    }

    //DISEÑO DE PEDIDOS EN WHASTAPP
    const phone = "5491140840051"; // <--- REVISÁ QUE ESTÉ TU NÚMERO
    
    let msg = `*🍣 NUEVO PEDIDO - SUSHI FAN*%0A`;
    msg += `------------------------------------------%0A%0A`;
    
    productosUnicos.forEach(p => {
      const subtotalProd = (p.precio * p.cantidad).toLocaleString('es-AR');
      msg += `*${p.cantidad}x* ${p.nombre}  ->  *$${subtotalProd}*%0A`;
    });
    
    msg += `%0A------------------------------------------%0A`;
    // Aquí agregamos las líneas que faltaban:
    msg += `Subtotal: $${total.toLocaleString('es-AR')}%0A`;
    msg += `Envío: $${COSTO_ENVIO.toLocaleString('es-AR')}%0A`;
    msg += `*TOTAL A PAGAR: $${(total + COSTO_ENVIO).toLocaleString('es-AR')}*%0A`;
    msg += `------------------------------------------%0A%0A`;
    
    msg += `*🔹 FORMA DE PAGO:* ${metodoPago}%0A`;
    msg += `*🔹 DIRECCIÓN:* ${direccion}%0A`;
    msg += `*🔹 NOTAS:* ${notas || 'Sin aclaraciones'}%0A%0A`;
    
    msg += `---%0A*¡Gracias por elegirnos!* 🍣%0A📸 ¡Etiquetanos en tus historias!`;
    
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');

    setCarrito([]);
    setMostrarResumen(false);
    setDireccion('');
    setNotas('');
  };

  return (
    /* ============================================================
       🖼️ CAPA 3: EL LIENZO (Estructura Base PC/Celular)
       ============================================================ */
    <div className="notranslate" style={{ backgroundColor: '#000', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      
      {/* EL "MARCO" DEL CELULAR */}
      <div style={{ width: '100%', maxWidth: '480px', backgroundColor: '#050505', backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-leather.png")', minHeight: '100vh', position: 'relative', padding: '15px' }}>

        {/* ------------------------------------------
            SECCIÓN: LOGO (Header)
            ------------------------------------------ */}
        <header style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', paddingTop: '20px' }}>
        <img src="productos/logo-sushi-fan.webp" alt="Sushi Fan" style={{ width: '280px', filter: 'drop-shadow(0 0 15px rgba(191,149,63,0.4))' }} />
      </header>

        {/* ------------------------------------------
            SECCIÓN: BOTONES CATEGORÍAS
            ------------------------------------------ */}
        <div style={{ display: 'flex', overflowX: 'auto', gap: '8px', marginBottom: '25px', paddingBottom: '10px' }}>
          {categorias.map(cat => (
            <button 
              key={cat} 
              onClick={() => setCategoriaActual(cat)} 
              style={{
                background: categoriaActual === cat ? oroPremium : 'rgba(20,20,20,0.9)',
                color: categoriaActual === cat ? '#000' : '#d4af37',
                border: '1px solid #4d3d1a', borderRadius: '10px', padding: '10px 15px', fontSize: '0.7rem', fontWeight: 'bold', whiteSpace: 'nowrap'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ------------------------------------------
            SECCIÓN: GRILLA DE PRODUCTOS
            ------------------------------------------ */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', paddingBottom: '120px' }}>
          {productos.filter(p => p.cat === categoriaActual).map(prod => {
            const cant = carrito.filter(item => item.id === prod.id).length;
            return (
              <div key={prod.id} style={{ background: '#0a0a0a', border: '1px solid #3d3118', borderRadius: '15px', padding: '10px', textAlign: 'center', position: 'relative' }}>
                <div style={{ aspectRatio: '16/9', borderRadius: '10px', overflow: 'hidden', marginBottom: '10px' }}>
                  <img src={`productos/${prod.nombre.toLowerCase().replace(/ /g, '-')}.webp`} alt={prod.nombre} style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={(e) => e.target.src = "https://via.placeholder.com/150/222/bf953f?text=Sushi"} />
                </div>
                {cant > 0 && <div style={{ position: 'absolute', top: '5px', right: '5px', background: oroPremium, color: '#000', borderRadius: '50%', width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{cant}</div>}
                <h3 style={{ fontSize: '0.75rem', color: '#fcf6ba', minHeight: '30px' }}>{prod.nombre}</h3>
                <p style={{ color: '#bf953f', fontWeight: 'bold' }}>${prod.precio.toLocaleString()}</p>
                <button onClick={() => agregarAlCarrito(prod)} style={{ width: '100%', marginTop: '10px', padding: '8px', borderRadius: '8px', background: oroPremium, border: 'none', fontWeight: 'bold' }}>AGREGAR</button>
              </div>
            );
          })}
        </div>

        {/* ------------------------------------------
            SECCIÓN: BOTÓN FLOTANTE CARRITO
            ------------------------------------------ */}
        <div onClick={() => setMostrarResumen(true)} style={{ position: 'fixed', bottom: '30px', right: '45%', transform: 'translateX(160px)', width: '70px', height: '70px', background: '#000', border: '2px solid #bf953f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, cursor: 'pointer' }}>
          <span style={{ fontSize: '2rem' }}>🛒</span>
          {carrito.length > 0 && <span style={{ position: 'absolute', top: 0, right: 0, background: '#39ff14', color: '#000', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{carrito.length}</span>}
        </div>

        {/* ------------------------------------------
            SECCIÓN: MODAL INTERIOR (El Carrito Abierto)
            ------------------------------------------ */}
        {mostrarResumen && (
          <div style={{ position: 'fixed', inset: 0, background: '#050505', backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-leather.png")', zIndex: 1000, display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', maxWidth: '480px', height: '100vh',marginTop: '10px',overflowY: 'auto',backgroundColor: '#050505', backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-leather.png")', display: 'flex', flexDirection: 'column', borderLeft: '1px solid #3d3118', borderRight: '1px solid #3d3118' }}>
              
              {/* Encabezado del Modal */}
              <div style={{ padding: '20px', borderBottom: '1px solid #bf953f', display: 'flex', alignItems: 'center', background: 'rgba(10,10,10,0.95)' }}>
                <button onClick={() => setMostrarResumen(false)} style={{ background: 'none', border: 'none', color: '#bf953f', fontSize: '2rem' }}>✕</button>
                <h2 style={{ color: '#fcf6ba', margin: '0 auto', }}>TU PEDIDO</h2>
              </div>

              {/* Lista Scrollable */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '15px' }}>
                {productosUnicos.map(p => (
                  <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', padding: '10px', background: '#111', borderRadius: '10px' }}>
                    <div>
                      <div style={{ fontWeight: 'bold', color: '#fff' }}>{p.nombre}</div>
                      <div style={{ color: '#bf953f' }}>${p.precio.toLocaleString()}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button onClick={() => quitarDelCarrito(p.id)} style={{ background: '#222', color: '#fff', border: '1px solid #bf953f', width: '30px', borderRadius: '5px' }}>-</button>
                      <span style={{ color: '#fff' }}>{p.cantidad}</span>
                      <button onClick={() => agregarAlCarrito(p)} style={{ background: '#bf953f', color: '#000', border: 'none', width: '30px', borderRadius: '5px' }}>+</button>
                    </div>
                  </div>
                ))}

                {/* Formulario de entrega */}
                <input type="text" placeholder="📍 Dirección de entrega" value={direccion} onChange={(e) => setDireccion(e.target.value)} style={{ width: '100%', padding: '12px', background: '#111', color: '#fff', border: '1px solid #333', borderRadius: '8px', marginTop: '20px' }} />
                <textarea placeholder="📝 Notas (ej: para que hora, no anda el timbre...)" value={notas} onChange={(e) => setNotas(e.target.value)} style={{ width: '100%', padding: '12px', background: '#111', color: '#fff', border: '1px solid #333', borderRadius: '8px', marginTop: '10px', height: '60px' }} />
                
                {/* Métodos de Pago */}
                <div style={{ marginTop: '20px' }}>
                  <p style={{ color: '#bf953f', fontWeight: 'bold', marginBottom: '10px' }}>PAGO:</p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={() => { seleccionarPago('Efectivo'); setCopiado(false); }} style={{ flex: 1, padding: '10px', borderRadius: '8px', background: metodoPago === 'Efectivo' ? oroPremium : '#111', color: metodoPago === 'Efectivo' ? '#000' : '#bf953f', border: '1px solid #bf953f' }}>Efectivo</button>
                    <button onClick={() => seleccionarPago('Mercado Pago')} style={{ flex: 1, padding: '10px', borderRadius: '8px', background: metodoPago === 'Mercado Pago' ? oroPremium : '#111', color: metodoPago === 'Mercado Pago' ? '#000' : '#bf953f', border: '1px solid #bf953f' }}>Mercado Pago</button>
                  </div>
                  {metodoPago === 'Mercado Pago' && (
                    <div style={{ width: '100%', marginTop: '10px', padding: '10px', background: 'rgba(191,149,63,0.1)', border: '1px dashed #bf953f', color: '#fcf6ba', borderRadius: '8px', textAlign: 'center', fontSize: '0.9rem' }}>
                      {copiado ? "✅ ¡ALIAS COPIADO!" : "Alias: SUSHI-FAN.MP"}
                    </div>
                  )}
                </div>
              </div>

              {/* Botón Finalizar */}
              <div style={{ padding: '20px', background: 'rgba(10,10,10,0.95)', borderTop: '1px solid #333' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: 'bold', color: '#fcf6ba', marginBottom: '15px' }}>
                  <span>TOTAL:</span>
                  <span>${(total + COSTO_ENVIO).toLocaleString()}</span>
                </div>
                <button onClick={enviarWhatsApp} style={{ width: '100%', padding: '15px', background: oroPremium, color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '1.1rem' }}>CONFIRMAR PEDIDO</button>
              </div>

            </div>
          </div>
        )}

      </div> {/* FIN MARCO CELULAR */}
    </div> /* FIN LIENZO PC */
  );
};

export default App;