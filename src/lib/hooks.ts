import { RefObject, useEffect, useState } from "react";

export function useOnViewIndexScreen(refs: RefObject<HTMLElement>[]) {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const calculateViewportCenter = () => {
    const windowHeight = window.innerHeight ||
      document.documentElement.clientHeight;
    const windowWidth = window.innerWidth ||
      document.documentElement.clientWidth;

    return {
      x: windowWidth / 2,
      y: windowHeight / 2,
    };
  };

  const handleScroll = () => {
    let found = false;

    refs.forEach((ref, index) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const viewportCenter = calculateViewportCenter();

        // Verifica se o centro da referência está próximo do centro do viewport
        if (
          Math.abs(rect.top + rect.height / 2 - viewportCenter.y) <
            window.innerHeight / 4 &&
          Math.abs(rect.left + rect.width / 2 - viewportCenter.x) <
            window.innerWidth / 4
        ) {
          setVisibleIndex(index);
          found = true;
          return; // Não é necessário continuar verificando os outros elementos
        }
      }
    });

    if (!found) {
      setVisibleIndex(null);
    }
  };

  useEffect(() => {
    // Verifica a visibilidade dos elementos ao carregar a página
    handleScroll();

    // Adiciona um event listener para o evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs]);

  return visibleIndex;
}
