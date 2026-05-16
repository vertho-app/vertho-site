/* og:image de /produto — reaproveita o gerador da Home (mesma imagem por
 * ora; refino tipográfico/por-página fica para a Fase 4). O arquivo
 * opengraph-image NÃO é herdado por rotas aninhadas no Next, então cada
 * segmento que precisa de OG re-exporta este gerador. */
export { default, size, contentType, alt } from "@/app/opengraph-image";
